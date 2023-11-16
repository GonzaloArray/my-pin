import { SubmitHandler, useForm } from "react-hook-form";
import { useProfileStore } from "../../../store/authProfileStore";
import { Title } from "../../../components/Title";
import { SpacingContent } from "../../../components/SpacingContent";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  getFirebaseData,
  sendFirebaseData,
} from "../../../service/firebaseAction";
import { useEffect, useState } from "react";
import { Resume } from "../../../type";

export type Inputs = {
  resumeSpanish: string;
  resumeEnglish: string;
};


export const ResumeSetup = () => {
  const user = useProfileStore((state) => state.user);
  const [resumes, setResumes] = useState<Resume>({
    english: "",
    spanish: "",
  });

  useEffect(() => {
    const getDataResume = async () => {
      const data = await getFirebaseData(user.uid, "resume");

      setResumes(data);
    };
    return () => {
      getDataResume();
    };
  }, [user.uid]);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { resumeSpanish, resumeEnglish } = data;

    const storage = getStorage();

    const uploadFileToFirebase = async (
      file: File | null,
      language: string
    ) => {
      if (file && file instanceof File) {
        const storageRef = ref(storage, `resumes/${user.uid}/${language}.pdf`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
      }
      return null;
    };

    const spanishResumeURL = await uploadFileToFirebase(
      resumeSpanish[0] as unknown as File | null,
      "spanish"
    );
    const englishResumeURL = await uploadFileToFirebase(
      resumeEnglish[0] as unknown as File | null,
      "english"
    );

    sendFirebaseData(user.uid, "resume", {
      spanish: spanishResumeURL,
      english: englishResumeURL,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validatePDF = (file: any) => {
    return file && file[0]?.type === "application/pdf";
  };

  return (
    <>
      <Title title="Resume" />
      <SpacingContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col gap-3">
              <a target="_blank" href={resumes.spanish} className="text-2xl bg-gray-500 p-2 rounded-lg text-center hover:bg-gray-400 transition-colors">Resume Spanish</a>
              <input
                {...register("resumeSpanish", {
                  required: true,
                  validate: {
                    isPDF: (value) => validatePDF(value),
                  },
                })}
                defaultValue={resumes.spanish}
                type="file"
                accept=".pdf"
              />
            </div>

            <label className="flex flex-col gap-3">
              <a target="_blank" href={resumes.english} className="text-2xl bg-gray-500 p-2 rounded-lg text-center hover:bg-gray-400 transition-colors">Resume English</a>
              <input
                {...register("resumeEnglish", {
                  required: true,
                  validate: {
                    isPDF: (value) => validatePDF(value),
                  },
                })}
                type="file"
                accept=".pdf"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-[400px] text-2xl h-[100px] border border-white-100 py-3 px-10 hover:bg-white-100"
          >
            Save Profile
          </button>
        </form>
      </SpacingContent>
    </>
  );
};
