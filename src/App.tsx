import { Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "./layout/LayoutDashboard"
import { Proyects } from "./page/Proyects"
import { Setup } from "./page/Setup"
import { Login } from "./auth/page/Login"
import { LayoutAuth } from "./auth/layout/LayoutAuth"
import { Register } from "./auth/page/Register"
import { LayoutSelfManagement } from "./dashboard/layout/LayoutSelfManagement"
import { ProfileUser } from "./dashboard/page/ProfileUser"
import { ProyectUser } from "./dashboard/page/ProyectUser"
import { SkillsUser } from "./dashboard/page/SkillsUser"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDashboard />} >
        <Route index element={<Proyects />} />
        <Route path="setup" element={<Setup />} />
      </Route>
      <Route path="auth" element={<LayoutAuth/>}>
        <Route index element={<Login/>} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard" element={<LayoutSelfManagement />}>
        <Route index element={<ProfileUser />} />
        <Route path="proyect" element={<ProyectUser />} />
        <Route path="skills" element={<SkillsUser />} />
      </Route>
    </Routes>
  )
}

export default App
