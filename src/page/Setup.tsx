import { Link } from "react-router-dom";
import { SpacingContent } from "../components/SpacingContent";
import { Title } from "../components/Title";

export const Setup = () => {
  return (
    <div className="flex flex-col gap-10 p-4 lg:p-10 z-10">
      <div className="flex gap-10 items-center">
        <Title title="Setup." />
        <Link to='/' className="text-4xl transition-colors hover:text-lime-400">
          - Go Back Profile -
        </Link>
      </div>
      <SpacingContent>
        <div className="flex flex-col gap-10">
          <div>
            <Title title="Profile." />
            <SpacingContent>
              <h2 className="mt-5">
                queres cambiar a dark mode toca click aqui
              </h2>
            </SpacingContent>
          </div>

          <div>
            <Title title="Dark Mode." />
            <SpacingContent>
              <h2 className="mt-5">
                queres cambiar a dark mode toca click aqui
              </h2>
            </SpacingContent>
          </div>

          <div>
            <Title title="Config Colors." />
            <SpacingContent>
              <h2 className="mt-5">
                queres cambiar a dark mode toca click aqui
              </h2>
            </SpacingContent>
          </div>

          <div>
            <Title title="Template." />
            <SpacingContent>
              <h2 className="mt-5">
                queres cambiar a dark mode toca click aqui
              </h2>
            </SpacingContent>
          </div>
        </div>
      </SpacingContent>
    </div>
  );
};
