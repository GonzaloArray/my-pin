import { Link, useParams } from "react-router-dom";
import { SpacingContent } from "../../components/SpacingContent";
import { Title } from "../../components/Title";
import { KeyBoard } from "../../common/icons/KeyBoard";
import { useProfileStore } from "../../store/authProfileStore";
import { useInfoProfileStore } from "../../store/infoProfileStore";
import { onLogout } from "../../service/firebaseAuth";

export const Setup = () => {
  const { id } = useParams();
  const userAuth = useProfileStore((state) => state.user);
  const reset = useProfileStore((state) => state.resetUser);
  const userInfo = useInfoProfileStore((state) => state.user);

  const handleLogout = () => {
    onLogout()
    reset()
  }

  return (
    <div className="flex flex-col gap-10 p-4 lg:p-10 z-10">
      <div className="flex justify-between gap-10 items-center">
        <Title title="Setup." />
        <Link
          to="/"
          className="text-lime-500 md:text-white md:text-4xl transition-colors hover:text-lime-400"
        >
          - Go Back Profile -
        </Link>
      </div>
      <SpacingContent>
        <div className="flex flex-col gap-10">
          <div>
            <Title title="User Count." />
            <SpacingContent>
              <div className="mt-5">
                {id === userAuth.uid && (
                  <button onClick={handleLogout} className="bg-red-500 w-[80px] h-[42px] rounded-lg border border-white text-sm" type="button">Log out</button>
                )}
                {userAuth.uid === "" && (
                  <Link
                    to="/auth"
                    className="border rounded-lg text-sm w-[80px] h-[42px] flex justify-center items-center bg-white-100"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </SpacingContent>
          </div>
          <div>
            <Title title="Profile." />
            <SpacingContent>
              <h2 className="mt-5">
                User info
              </h2>
              <p>{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </SpacingContent>
          </div>

          <div>
            <Title title="Dark Mode." />
            <SpacingContent>
              <div className="flex gap-4 items-center mt-5">
                <h2>Resume</h2>
                <button className="w-[60px] h-[30px] bg-white">
                </button>
                <button className="w-[60px] h-[30px] bg-gray-600">
                </button>
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 md:w-[600px] gap-4 mt-10">
                <div className="flex items-center gap-4">
                  <button className="flex gap-2">{KeyBoard.esc}:</button>
                  <p>Cierra todos los modales.</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex gap-2">{KeyBoard.control1}:</button>
                  <p>Abre Linkedin del usuario.</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex gap-2">{KeyBoard.control2}:</button>
                  <p>Abre Github del usuario.</p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex gap-2">{KeyBoard.control3}:</button>
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
