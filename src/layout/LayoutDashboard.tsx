import { Outlet } from "react-router-dom";
import { UserDescription } from "../components/UserDescription";
import { useState } from "react";
import ModalCv from "../components/Modal";


export const LayoutDashboard = () => {
  const [toggle, setToggle] = useState(false)
  const [modalCv, setModalCv] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleModalCv = () => {
    setModalCv(!modalCv)
  }

  return (
    <div className="relative">
      <div className={`h-screen fixed w-[410px] flex justify-between gap-5  items-center flex-col bg-slate-900 p-7 border-spacing-2 border-r-2 border-lime-50 ${toggle ? '': '-left-[400px]'}`}>
        <UserDescription setModalCv={handleModalCv} modalCv={modalCv} toggle={toggle} setToggle={handleToggle} />
      </div>
      <div className={`absolute right-0 flex flex-col ${toggle ? 'left-[410px]':'left-5'}`}>
        <Outlet />
      </div>
      {
        modalCv && <ModalCv modalCv={modalCv} setModalCv={handleModalCv}/>
      }
    </div>
  );
};
