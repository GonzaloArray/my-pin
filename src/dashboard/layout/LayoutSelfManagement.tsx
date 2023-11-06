import { Outlet } from "react-router-dom"
import { Aside } from "../components/Aside"
import { Header } from "../components/Header"

export const LayoutSelfManagement = () => {
  return (
    <>
      <Header />
      <div>
        <Aside />
        <main className="absolute right-0 flex flex-col z-0 sm:block sm:left-[300px]">
          <div className="flex flex-col gap-10 p-4 lg:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}
