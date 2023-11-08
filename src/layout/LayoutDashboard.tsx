import { Outlet } from "react-router-dom";
import { UserDescription } from "../components/UserDescription";
import { useState } from "react";
import Modal from "../components/Modal";
import { Footer } from "../components/Footer";

export const LayoutDashboard = () => {
  const [toggle, setToggle] = useState(false);
  const [modalCv, setModalCv] = useState(false);
  const [modalFormData, setModaFormData] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleModalCv = () => {
    setModalCv(!modalCv);
  };

  const handleModalFormData = () => {
    setModaFormData(!modalFormData);
  };

  return (
    <div className="relative">
      <div
        className={`h-screen fixed z-50 w-[98%] md:w-[410px] flex justify-between gap-5  items-center flex-col bg-slate-900 p-7 border-spacing-2 border-r-2 border-lime-50 ${toggle ? "" : "-left-[400px]"
          }`}
      >
        <UserDescription
          setModalCv={handleModalCv}
          setModalFormData={handleModalFormData}
          modalCv={modalCv}
          toggle={toggle}
          setToggle={handleToggle}
        />
      </div>
      <div
        className={`absolute right-0 flex flex-col z-0 ${toggle ? "hidden sm:block sm:left-[410px]" : "left-5"
          }`}
      >
        <Outlet />
        <Footer />
      </div>
      {modalCv && (
        <Modal modalCv={modalCv} setModalCv={handleModalCv}>
          <div className="flex flex-col gap-3">
            <h2 className="text-center underline underline-offset-4">Dowload Resume</h2>
            <div className="flex gap-8 justify-evenly flex-1 mt-5">
              <a
                target="_blank"
                href=""
                className="hover:bg-white-100 rounded-xl p-3 w-full text-center"
              >
                In Spanish
              </a>
              <a
                target="_blank"
                href=""
                className="hover:bg-white-100 rounded-xl p-3 w-full text-center"
              >
                In English
              </a>
            </div>
          </div>
        </Modal>
      )}
      {modalFormData && (
        <Modal modalCv={modalFormData} setModalCv={handleModalFormData}>
          <form className="flex flex-col w-full gap-4 text-black">
            <label className="flex flex-col">
              <span className="text-white">Asunto:</span>
              <input className="p-2 rounded-md" type="text" placeholder="Ex: Gonzalo Arrayaran" />
            </label>
            <label className="flex flex-col">
              <span className="text-white">Email:</span>
              <input className="p-2 rounded-md" type="email" placeholder="Ex: portfolio@gmail.com" />
            </label>
            <textarea className="rounded-md p-2" placeholder="Write me..." name="" id="" rows={4}></textarea>
            <button type="submit" className="text-white bg-red-800 rounded-lg p-2 hover:bg-red-500">Send Message</button>
          </form>
        </Modal>
      )}
    </div>
  );
};
