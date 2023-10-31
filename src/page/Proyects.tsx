import { useState } from "react";
import { Card } from "../components/Card";
import { SpacingContent } from "../components/SpacingContent";
import { Stack } from "../components/Stack";
import { Title } from "../components/Title";
import { Dashboard } from "../icons/Dashboard.icon";

export const Proyects = () => {
  const [dashboard, setDashboard] = useState({
    xr: "grid-cols-2",
    sm: "grid-cols-2",
    md: "grid-cols-2",
    lg: "grid-cols-3",
    xl: "grid-cols-4",
    btnActive: 2,
  });

  const handleDashRectangle = (layout: {
    xr: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    btnActive: number;
  }) => {
    setDashboard(layout);
  };

  return (
    <div className="flex flex-col gap-10 p-4 lg:p-10">
      <div className="flex justify-between">
        <Title title="Projects." />
        <div className="flex gap-1">
          <button
            onClick={() =>
              handleDashRectangle({
                xr: "grid-cols-1",
                sm: "sm:grid-cols-1",
                md: "md:grid-cols-1",
                lg: "lg:grid-cols-1",
                xl: "xl:grid-cols-2",
                btnActive: 1,
              })
            }
            className={`${
              dashboard.btnActive === 1 ? "bg-gray-500" : "hover:bg-gray-500"
            } p-2 transition-colors  rounded-xl`}
          >
            {Dashboard.rectangle}
          </button>
          <button
            onClick={() =>
              handleDashRectangle({
                xr: "grid-cols-2",
                sm: "sm:grid-cols-2",
                md: "md:grid-cols-2",
                lg: "lg:grid-cols-3",
                xl: "xl:grid-cols-3",
                btnActive: 2,
              })
            }
            className={`${
              dashboard.btnActive === 2 ? "bg-gray-500" : "hover:bg-gray-500"
            } p-2 transition-colors  rounded-xl`}
          >
            {Dashboard.dashboard}
          </button>
          <button
            onClick={() =>
              handleDashRectangle({
                xr: "grid-cols-2",
                sm: "sm:grid-cols-2",
                md: "md:grid-cols-3",
                lg: "lg:grid-cols-4",
                xl: "xl:grid-cols-4",
                btnActive: 3,
              })
            }
            className={`${
              dashboard.btnActive === 3 ? "bg-gray-500" : "hover:bg-gray-500"
            } p-2 transition-colors  rounded-xl`}
          >
            {Dashboard.square}
          </button>
        </div>
      </div>
      <SpacingContent>
        <div
          className={`grid ${dashboard.xr} ${dashboard.sm} ${dashboard.md} ${dashboard.lg} ${dashboard.xl} gap-4 box-border`}
        >
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
