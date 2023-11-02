import { Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "./layout/LayoutDashboard"
import { Proyects } from "./page/Proyects"
import { Setup } from "./page/Setup"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDashboard />} >
        <Route index element={<Proyects />} />
        <Route path="setup" element={<Setup />} />
      </Route>
    </Routes>
  )
}

export default App
