import { SelectLink } from "../components/selectLink/SelectLink";
import { ProfileSetup } from "../components/profileUser/ProfileSetup";
import { BannerSetup } from "../components/profileUser/BannerSetup";
import { ResumeSetup } from "../components/profileUser/ResumeSetup";

export type Inputs = {
  name: string;
  title: string;
  description: string;
};



export const ProfileUser = () => {

  return (
    <div className="flex flex-col gap-8">
      <BannerSetup />
      <ResumeSetup />
      <ProfileSetup />
      <SelectLink />
    </div>
  );
};
