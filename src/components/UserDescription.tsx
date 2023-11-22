import { Arrow } from "../common/icons/Arrow.icon";
import { Avatar } from "./Avatar";
import { LinkNetworking } from "./LinkNetworking";
// import { PopStatusUser } from "./PopStatusUser";
import { SetupUser } from "./SetupUser";
import Style from "./UserDescription.module.css";
// import Status from "../assets/status.png"
import { BannerUser } from "./BannerUser";
import { useInfoProfileStore } from "../store/infoProfileStore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirebaseData } from "../service/firebaseAction";
import { SkeletonLoading } from "./SkeletonLoading";
import { Toaster, toast } from "sonner";

interface Props {
  toggle: boolean;
  modalCv: boolean;
  setToggle: () => void;
  setModalCv: () => void;
  setModalFormData: () => void;
}

interface Banner {
  profileURL: string;
  bannerURL: string;
}

export const UserDescription = ({
  setModalCv,
  toggle,
  setToggle,
  setModalFormData,
}: Props) => {
  const [banners, setBanners] = useState<Banner>({
    profileURL: "",
    bannerURL: "",
  });
  const [loading, setLoading] = useState(false);
  const user = useInfoProfileStore((state) => state.user);

  const { id } = useParams();
  useEffect(() => {
    const getBannerUser = async () => {
      try {
        setLoading(true);
        if (!id) return;
        const data = await getFirebaseData(id, "profileBanner");
        setBanners(data);
      } catch (error) {
        console.log(error);
        toast.error('Error user.')
      } finally {
        setLoading(false);
      }
    };
    getBannerUser();
  }, [id]);

  return (
    <>
      <Toaster style={{ backgroundColor: "red" }} />
      <button
        onClick={() => setToggle()}
        className={`absolute z-10 top-8 bg-black border-l-2 border-t-2 border-b-2 border-lime-50 py-3 rounded-l-xl transition-all ${toggle ? "end-0 hover:px-5 -mr-3" : "rotate-180 px-2 -end-7"
          }`}
      >
        <Arrow className={Style.icon} />
      </button>
      <div className="flex flex-col gap-3">
        <div>
          <SkeletonLoading className="h-[150px]" count={1} loading={loading}>
            <BannerUser banner={banners.bannerURL} />
          </SkeletonLoading>
          {/* <img src={Status} className="w-[70px] absolute left-[6rem] top-0" alt="Status User" />
          <PopStatusUser /> */}
          <SkeletonLoading className="h-[150px]" count={1} loading={loading}>
            <Avatar banner={banners.profileURL} />
          </SkeletonLoading>
        </div>
        <SkeletonLoading className="p-2" count={1} loading={loading}>
          <h1 className="font-bold line-clamp-1">{user.title}</h1>
        </SkeletonLoading>

        <SkeletonLoading className="p-2" count={1} loading={loading}>
          <p className="tracking-wide leading-7">{user.description}</p>
        </SkeletonLoading>

        <div className="flex gap-2">
          <button
            onClick={() => setModalCv()}
            className="btn btn-gray mt-7 w-full"
          >
            Descargar CV
          </button>
          <button
            onClick={() => setModalFormData()}
            className="btn btn-gray mt-7 w-full"
          >
            Contact me
          </button>
        </div>
      </div>

      <LinkNetworking toggle={toggle} />
      <SkeletonLoading count={4} loading={loading}>
        <SetupUser toggle={toggle} />
      </SkeletonLoading>
    </>
  );
};
