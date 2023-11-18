import { Title } from "../../components/Title";
import { Skills } from "../components/Skills";

export const SkillsUser = () => {

  return (
    <div className="flex flex-col gap-10">
      <Skills name='skills'>
        <Title title="Skills."/>
      </Skills>
      <Skills name='learning'>
        <Title title="Learning."/>
      </Skills>
    </div>
  );
};
