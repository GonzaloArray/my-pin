interface Props {
  modalCv: boolean
  setModalCv: () => void;
}
function ModalCv({ modalCv, setModalCv }: Props) {
  return (
    <div className="fixed bottom-0 top-0 left-0 right-0 bg-black-100 flex justify-center items-center">
      <div className={`flex justify-center items-center gap-5 bg-black rounded-2xl w-[400px] h-[200px] border-2 border-spacing-14 border-lime-900 relative animate__animated ${modalCv ? 'animate__bounce': 'animate__fadeOutLeft'}`}>
        <button onClick={() => setModalCv()} className="absolute top-3 end-4 hover:scale-105 transition-all">
          ❌
        </button>
        <a
          target="_blank"
          href=""
          className="hover:bg-white-100 rounded-xl p-3"
        >
          Descargar Cv
        </a>
        <a
          target="_blank"
          href=""
          className="hover:bg-white-100 rounded-xl p-3"
        >
          Dowload Resume
        </a>
      </div>
    </div>
  );
}

export default ModalCv;
