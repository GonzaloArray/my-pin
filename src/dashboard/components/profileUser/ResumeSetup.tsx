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
import { toast } from "sonner";
import Skeleton from "react-loading-skeleton";
import { BtnSubmit } from "../btn/BtnSubmit";

export type Inputs = {
  resumeSpanish: string;
  resumeEnglish: string;
};

export const ResumeSetup = () => {
  const user = useProfileStore((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const [resumes, setResumes] = useState<Resume>({
    english: "",
    spanish: "",
  });

  useEffect(() => {
    const getDataResume = async () => {
      setLoading(true);
      try {
        const data = await getFirebaseData(user.uid, "resume");
        setResumes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getDataResume();
  }, [user.uid]);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSendLoading(true)
    const { resumeSpanish, resumeEnglish } = data;

    const storage = getStorage();

    const uploadFileToFirebase = async (
      file: File | null,
      language: string
    ) => {
      try {
        if (file && file instanceof File) {
          const storageRef = ref(storage, `resumes/${user.uid}/${language}.pdf`);
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          return downloadURL;
        }
        return null;
      } catch (error) {
        console.log(error);
      } finally {
        setSendLoading(false)
      }
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

    toast.success("Saved Successfully");
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
              {loading ? (
                <Skeleton className="p-3" />
              ) : (
                <a
                  target="_blank"
                  href={resumes.spanish}
                  className="text-2xl bg-gray-500 p-2 rounded-lg text-center hover:bg-gray-400 transition-colors"
                >
                  Resume Spanish
                </a>
              )}
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
              {loading ? (
                <Skeleton className="p-3" />
              ) : (
                <a
                  target="_blank"
                  href={resumes.english}
                  className="text-2xl bg-gray-500 p-2 rounded-lg text-center hover:bg-gray-400 transition-colors"
                >
                  Resume English
                </a>
              )}
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
          <BtnSubmit loading={sendLoading} />
        </form>
      </SpacingContent>
    </>
  );
};
