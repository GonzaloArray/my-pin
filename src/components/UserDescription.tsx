import Profile from "../assets/profile.jpeg";
import { Stack } from "./Stack";

export const UserDescription = () => {
  return (
    <div className="lg:w-1/3 flex justify-center gap-5  items-center flex-col bg-slate-700 p-5">
      <img
        className="rounded-full object-contain"
        src={Profile}
        alt="Javier Gonzalo Arrayaran"
      />
      <h1>Hi there👋, I'm Gonzalo.</h1>
      <p className="lg:w-2/3 tracking-wide leading-7">
        I’m from Buenos Aires, Argentina. I’m working with JS since 2022. My
        goal is to learn new technologies and become a FrontEnd Architect. I
        code in JavaScript, React, Sass, Material UI. I also have knowledge of
        Node with Express in the backend. I would love to learn Three js and
        Blender to make amazing things in the web. I'm currently practicing
        Nextjs :)
      </p>
      <button className="btn btn-gray mt-6">Descargar CV</button>

      <Stack />
    </div>
  );
};
