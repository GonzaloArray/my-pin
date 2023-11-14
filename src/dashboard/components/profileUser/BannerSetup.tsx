import React, { useEffect, useState } from "react";
import Pixel from "../../../assets/pixel_banner.webp";
import Profile from "../../../assets/profile.jpeg";
import { useForm } from "react-hook-form";
import { SpacingContent } from "../../../components/SpacingContent";
import { Title } from "../../../components/Title";
import { useProfileStore } from "../../../store/authProfileStore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirebaseData, sendFirebaseData } from "../../../service/firebaseAction";
import { useParams } from "react-router-dom";

interface FormData {
  selectBanner: FileList;
  selectProfile: FileList;
}

export const BannerSetup: React.FC = () => {
  const {id} = useParams()
  const { register, handleSubmit } = useForm<FormData>();
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const user = useProfileStore((state) => state.user);


  useEffect(() => {
    const getDataBanners = async () => {
      if (!id) return
      const data = await getFirebaseData(id, 'profileBanner')
      setProfileImage(data.profileURL)
      setBannerImage(data.bannerURL)
    }
    return () => {
      getDataBanners()
    }
  }, [id])

  const onSubmit = async (data: FormData) => {
    const storage = getStorage();

    try {
      let bannerDownloadURL;
      let profileDownloadURL;

      const bannerFile = data.selectBanner ? data.selectBanner[0] : null;
      if (bannerFile) {
        const bannerFilename = `profile-banner-${crypto.randomUUID()}`;
        const bannerStorageRef = ref(storage, `images/${bannerFilename}`);
        await uploadBytes(bannerStorageRef, bannerFile);
        bannerDownloadURL = await getDownloadURL(bannerStorageRef);
      }

      // Subir imagen del perfil
      const profileFile = data.selectProfile ? data.selectProfile[0] : null;
      if (profileFile) {
        const profileFilename = `profile-image-${crypto.randomUUID()}`;
        const profileStorageRef = ref(storage, `images/${profileFilename}`);
        await uploadBytes(profileStorageRef, profileFile);
        profileDownloadURL = await getDownloadURL(profileStorageRef);
      }

      if (bannerDownloadURL || profileDownloadURL) {
        if(!id) return
        sendFirebaseData(id, 'profileBanner',{
          bannerURL: bannerDownloadURL || null,
          profileURL: profileDownloadURL || null,
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setBannerImage(objectURL);
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setProfileImage(objectURL);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <Title title="Banner" />
      <SpacingContent>
        <div className="flex justify-start gap-20 items-center">
          <div className="flex flex-col gap-5">
            <div className="relative">
              <img
                className="w-[600px] h-[200px] object-bottom object-cover"
                src={bannerImage ? bannerImage : Pixel}
                alt="Banner Image Contain"
              />
              <input
                type="file"
                {...register("selectBanner")}
                accept="image/*"
                onChange={handleBannerChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 relative">
            <img
              className="h-[180px] w-[180px] rounded-full object-contain animate__animated animate__fadeIn"
              src={profileImage ?? Profile}
              alt={user.name}
            />
            <input
              type="file"
              {...register("selectProfile")}
              accept="image/*"
              onChange={handleProfileChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-[400px] text-2xl h-[100px] border border-white-100 py-3 px-10 hover:bg-white-100 mt-5"
        >
          Save Profile
        </button>
      </SpacingContent>
    </form>
  );
};
