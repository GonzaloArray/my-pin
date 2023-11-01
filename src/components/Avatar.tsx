import { useState } from "react";
import Profile from "../assets/profile.jpeg";
import QrPng from "../assets/qr.png";
import Style from "./Avatar.module.css";
import { Qr } from "../icons/Qr.icon";


export const Avatar = () => {
  const [qr, setQr] = useState(true);

  return (
    <div className="flex justify-center mt-5 mb-10 2xl:mt-20 2xl:mb-20">
      <div className={`${Style.avatar}`}>
        <button
          onClick={() => setQr(!qr)}
          className="absolute right-0 -bottom-6 bg-black-100 p-2 border-spacing-3 border border-white rounded-lg hover:scale-110 transition-all"
          type="button"
        >
          <Qr />
        </button>
        {qr ? (
          <img
            className="rounded-full object-contain animate__animated animate__fadeIn"
            src={Profile}
            alt="Javier Gonzalo Arrayaran"
          />
        ) : (
          <div>
            <img
              className="object-contain p-2 animate__animated animate__jello"
              src={QrPng}
              alt="Javier Gonzalo Arrayaran"
            />
          </div>
        )}
      </div>
    </div>
  );
};
