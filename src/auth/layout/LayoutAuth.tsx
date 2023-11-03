import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"


export const LayoutAuth = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header/>
      <Outlet/>
    </div>
  )
}
