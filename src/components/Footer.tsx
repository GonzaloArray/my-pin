import Melty from "../assets/Melty.png";

export const Footer = () => {
  return (
    <div className="mt-5 border-t-2 p-4 lg:p-10">
      <h2 className="text-center font-light flex justify-center items-center gap-3">
        Designed and coded with ❤️ by{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gonzalo-arrayaran/"
          className="mt-2"
        >
          <img className="w-[60px]" src={Melty} alt="" />
        </a>
      </h2>
    </div>
  );
};
