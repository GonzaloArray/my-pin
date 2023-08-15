import { Card } from "../components/Card";

export const Proyects = () => {
  return (
    <div className="lg:w-2/3 p-4 lg:p-10">
      <h2 className="text-3xl">Projects.</h2>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
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
      </div>
    </div>
  );
};
