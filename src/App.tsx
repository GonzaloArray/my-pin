import { Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "./layout/LayoutDashboard"
import { Proyects } from "./page/Proyects"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LayoutDashboard />} >
        <Route index element={<Proyects />}/>
      </Route>
    </Routes>
  )
}

export default App
