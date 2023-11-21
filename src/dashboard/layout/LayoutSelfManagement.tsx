import { Outlet, useParams } from "react-router-dom";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import { getFirebaseData } from "../../service/firebaseAction";
import { useProfileStore } from "../../store/authProfileStore";

export const LayoutSelfManagement = () => {
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();
  const getUser = useProfileStore((state) => state.getUser);

  useEffect(() => {
    const getDataUser = async () => {
      if (!id) return;
      const data = await getFirebaseData(id, "users");
      getUser({ ...data });
    };

    return () => {
      getDataUser();
    };
  }, [id, getUser]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header />
      <div>
        <Aside toggle={toggle} setToggle={handleToggle} />
        <main
          className={`absolute right-0 flex flex-col top-12 z-10 ${
            toggle ? "hidden sm:block sm:left-[300px]" : "left-3 md:left-4"
          }`}
        >
          <div className="flex flex-col gap-10 pt-10">
            <div className="p-4 lg:p-10">
              <Outlet />
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};
