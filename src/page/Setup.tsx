import { Link } from "react-router-dom";
import { SpacingContent } from "../components/SpacingContent";
import { Title } from "../components/Title";
import { KeyBoard } from "../icons/KeyBoard";

export const Setup = () => {
  return (
    <div className="flex flex-col gap-10 p-4 lg:p-10 z-10">
      <div className="flex justify-between gap-10 items-center">
        <Title title="Setup." />
        <Link to='/' className="text-lime-500 md:text-white md:text-4xl transition-colors hover:text-lime-400">
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

          <div>
            <Title title="KeyBoard Commands." />
            <SpacingContent>
              <div className="grid grid-cols-2 md:w-[600px] gap-4 mt-10">
                <div className="flex items-center gap-4">
                  <button className="flex gap-2">
                    {KeyBoard.esc}:
                  </button>
                  <p>Cierra todos los modales.</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex gap-2">
                    {KeyBoard.control1}:
                  </button>
                  <p>Abre Linkedin del usuario.</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex gap-2">
                    {KeyBoard.control2}:
                  </button>
                  <p>Abre Github del usuario.</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex gap-2">
                    {KeyBoard.control3}:
                  </button>
                  <p>Abre Instagram del usuario.</p>
                </div>
              </div>

            </SpacingContent>
          </div>
        </div>
      </SpacingContent>
    </div>
  );
};
