import { Card } from "../components/Card";
import { SpacingContent } from "../components/SpacingContent";
import { Stack } from "../components/Stack";
import { Title } from "../components/Title";

export const Proyects = () => {
  return (
    <div className="flex flex-col gap-10 p-4 lg:p-10">
      <Title title="Projects." />
      <SpacingContent>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          <Card
            link="https://github.com/No-Country/c12-40-ft-react-agregarback.git"
            title="Howdy"
            description="Website"
          />
          <Card
            link="https://github.com/GonzaloArray/challengue-tecnico-2.git"
            title="Challengue 2"
            description="Challengue"
          />
          <Card
            link="https://github.com/GonzaloArray/challengue-midu-dev-1.git"
            title="Challengue 1"
            description="Challengue"
          />
          <Card
            link="https://github.com/GonzaloArray/calculator.git"
            title="Calculator UI and Functional"
            description="Website"
          />
          <Card
            link="https://github.com/GonzaloArray/calculator.git"
            title="Calculator UI and Functional"
            description="Website"
          />
          <Card
            link="https://github.com/GonzaloArray/calculator.git"
            title="Calculator UI and Functional"
            description="Website"
          />
          <Card
            link="https://github.com/GonzaloArray/calculator.git"
            title="Calculator UI and Functional"
            description="Website"
          />
          <Card
            link="https://github.com/GonzaloArray/calculator.git"
            title="Calculator UI and Functional"
            description="Website"
          />
        </div>
      </SpacingContent>
      <Title title="Skills." />
      <SpacingContent>
        <Stack />
      </SpacingContent>
      <Title title="Learning." />
      <SpacingContent>
        <Stack />
      </SpacingContent>
    </div>
  );
};
