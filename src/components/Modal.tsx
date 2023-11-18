import { ReactNode, useEffect, useRef } from "react";
import { KeyBoard } from "../common/icons/KeyBoard";

interface Props {
  modalCv: boolean;
  setModalCv: () => void;
  children: ReactNode;
  className?: string;
}
export default function Modal({ modalCv, setModalCv, children, className = 'h-[auto]' }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalCv && modalRef.current) {
      modalRef.current.focus();
    }
  }, [modalCv]);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setModalCv();
    }
  };

  return (
    <div
      ref={modalRef}
      tabIndex={0}
      onKeyDown={handleKeyPress}
      className="fixed bottom-0 top-0 left-0 right-0 bg-black-100 flex justify-center items-center z-50"
    >
      <div
        className={` bg-black rounded-md w-[90%] md:w-[700px] border-2 border-lime-900 relative animate__animated py-10 px-10 md:p-10 ${
          modalCv ? "animate__zoomIn" : "animate__fadeOutDown"
        } ${className}`}
      >
        <div className="absolute top-3 end-4 flex gap-3 items-center">
          {KeyBoard.esc}
          <button
            onClick={() => setModalCv()}
            className="hover:scale-105 transition-all"
          >
            ✖
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
