import { Arrow } from "../icons/Arrow.icon";
import { Avatar } from "./Avatar";
import { LinkNetworking } from "./LinkNetworking";
import { PopStatusUser } from "./PopStatusUser";
import { SetupUser } from "./SetupUser";
import Style from "./UserDescription.module.css";
import Status from "../assets/status.png"

interface Props {
  toggle: boolean;
  modalCv: boolean;
  setToggle: () => void;
  setModalCv: () => void;
  setModalFormData: () => void;
}

export const UserDescription = ({
  setModalCv,
  toggle,
  setToggle,
  setModalFormData,
}: Props) => {
  return (
    <>
      <button
        onClick={() => setToggle()}
        className={`absolute  top-8 bg-black border-l-2 border-t-2 border-b-2 border-lime-50 py-3 rounded-l-xl transition-all ${
          toggle ? "end-0 hover:px-5 -mr-3" : "rotate-180 px-2 -end-7"
        }`}
      >
        <Arrow className={Style.icon} />
      </button>
      <div className="flex flex-col gap-3">
        <div>
          <img src={Status} className="w-[70px] absolute left-[6rem] top-0" alt="Status User" />
          <PopStatusUser/>
          <Avatar />
        </div>
        <h1 className="font-bold">Hi there👋, I'm Gonzalo.</h1>
        <p className="tracking-wide leading-7">
          I’m from Buenos Aires, Argentina. I’m working with JS since 2022. My
          goal is to learn new technologies and become a FrontEnd Architect. I
          code in JavaScript, React, Sass
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setModalCv()}
            className="btn btn-gray mt-7 w-full"
          >
            Descargar CV
          </button>
          <button
            onClick={() => setModalFormData()}
            className="btn btn-gray mt-7 w-full"
          >
            Contact me
          </button>
        </div>
      </div>

      <LinkNetworking toggle={toggle} />
      <SetupUser toggle={toggle} />
    </>
  );
};
