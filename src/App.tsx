import { Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "./layout/LayoutDashboard"
import { Proyects } from "./page/Proyects"
import { Setup } from "./page/Setup"
import { Login } from "./auth/page/Login"
import { LayoutAuth } from "./auth/layout/LayoutAuth"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDashboard />} >
        <Route index element={<Proyects />} />
        <Route path="setup" element={<Setup />} />
      </Route>
      <Route path="auth" element={<LayoutAuth/>}>
        <Route index element={<Login/>} />
        <Route path="register" element={<Login/>} />
      </Route>
    </Routes>
  )
}

export default App
