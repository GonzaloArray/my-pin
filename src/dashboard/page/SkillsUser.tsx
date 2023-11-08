import { Title } from "../../components/Title";
import { Skills } from "../components/Skills";

export const SkillsUser = () => {

  return (
    <div className="flex flex-col gap-10">
      <Skills>
        <Title title="Skills."/>
      </Skills>
      <Skills>
        <Title title="Learning."/>
      </Skills>
    </div>
  );
};
