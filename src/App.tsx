import { Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "./profile/layout/LayoutDashboard"
import { Proyects } from "./profile/page/Proyects"
import { Setup } from "./profile/page/Setup"
import { Login } from "./auth/page/Login"
import { LayoutAuth } from "./auth/layout/LayoutAuth"
import { Register } from "./auth/page/Register"
import { LayoutSelfManagement } from "./dashboard/layout/LayoutSelfManagement"
import { ProfileUser } from "./dashboard/page/ProfileUser"
import { ProyectUser } from "./dashboard/page/ProyectUser"
import { SkillsUser } from "./dashboard/page/SkillsUser"
import { Home } from "./home/page/Home"
import { useEffect } from "react"
import { onAuthenticatedAutomatic } from "./service/firebaseAuth"
import { useProfileStore } from "./store/authProfileStore"

function App() {
  const getUser = useProfileStore(state => state.getUser)

  useEffect(() => {
    const getTokenAuthenticated = async () => {
      const data = await onAuthenticatedAutomatic()
      if (data.success && data.userFirebase) {
        getUser(data.userFirebase);
      }
    }
    return () => {
      getTokenAuthenticated()
    }
  }, [getUser])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<LayoutDashboard />} >
        <Route index element={<Proyects />} />
        <Route path="setup" element={<Setup />} />
      </Route>
      <Route path="auth" element={<LayoutAuth />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="dashboard/:id" element={<LayoutSelfManagement />}>
        <Route index element={<ProfileUser />} />
        <Route path="proyect" element={<ProyectUser />} />
        <Route path="skills" element={<SkillsUser />} />
      </Route>
    </Routes>
  )
}

export default App
