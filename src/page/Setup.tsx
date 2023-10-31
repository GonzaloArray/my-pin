import { SpacingContent } from "../components/SpacingContent";
import { Title } from "../components/Title";

export const Setup = () => {
  return (
    <div className="flex flex-col gap-10 p-4 lg:p-10 z-10">
      <Title title="Setup." />
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
