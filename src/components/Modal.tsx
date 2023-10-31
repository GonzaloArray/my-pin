import { ReactNode } from "react";

interface Props {
  modalCv: boolean
  setModalCv: () => void;
  children: ReactNode
}
export default function Modal({ modalCv, setModalCv, children }: Props) {
  return (
    <div className="fixed bottom-0 top-0 left-0 right-0 bg-black-100 flex justify-center items-center">
      <div className={`flex justify-center items-center gap-5 bg-black rounded-2xl w-[400px] h-[auto] p-10 border-2 border-spacing-14 border-lime-900 relative animate__animated ${modalCv ? 'animate__zoomIn': 'animate__fadeOutDown'}`}>
        <button onClick={() => setModalCv()} className="absolute top-3 end-4 hover:scale-105 transition-all">
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}


