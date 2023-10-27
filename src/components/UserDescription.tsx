import { Arrow } from "../icons/Arrow.icon";
import { Avatar } from "./Avatar";
import { LinkNetworking } from "./LinkNetworking";
import Style from './UserDescription.module.css'


export const UserDescription = () => {
  return (
    <div className="lg:w-1/3 2xl:w-1/4 flex justify-between gap-5  items-center flex-col bg-slate-900 p-7 relative border-spacing-2 border-r-2 border-lime-50">
      <button className="absolute end-0 top-8 bg-black -mr-3 border-l-2 border-t-2 border-b-2 border-lime-50 hover:px-5 py-3 rounded-l-xl transition-all">
        <Arrow className={Style.icon}/>
      </button>
      <div className="flex flex-col gap-3">
        <Avatar/>
        <h1 className="font-bold">Hi there👋, I'm Gonzalo.</h1>
        <p className="tracking-wide leading-7">
          I’m from Buenos Aires, Argentina. I’m working with JS since 2022. My
          goal is to learn new technologies and become a FrontEnd Architect. I
          code in JavaScript, React, Sass, Material UI. I also have knowledge of
          Node with Express in the backend. I would love to learn Three js and
          Blender to make amazing things in the web. I'm currently practicing
          Nextjs :)
        </p>
        <div className="flex">
          <button className="btn btn-gray mt-7 w-full">Descargar CV</button>
        </div>
      </div>

      <LinkNetworking/>
    </div>
  );
};
