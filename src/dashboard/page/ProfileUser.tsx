import { SelectLink } from "../components/selectLink/SelectLink";
import { ProfileSetup } from "../components/profileUser/ProfileSetup";
import { BannerSetup } from "../components/profileUser/BannerSetup";
import { ResumeSetup } from "../components/profileUser/ResumeSetup";
import { Toaster } from "sonner";

export type Inputs = {
  name: string;
  title: string;
  description: string;
  job: string;
};



export const ProfileUser = () => {

  return (
    <div className="flex flex-col gap-8">
      <Toaster toastOptions={{
        style: { background: 'green', color: 'white' },
      }} />
      <BannerSetup />
      <ResumeSetup />
      <ProfileSetup />
      <SelectLink />
    </div>
  );
};
