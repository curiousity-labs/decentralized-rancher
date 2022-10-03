import { Route, Routes } from "react-router-dom"
import Dashboard from "../components/dashboard"
import { useKeyPresses } from "../hooks/useKeyPresses"
import SpawnRoutes from "./spawn"

const MainRoutes = () => {
  useKeyPresses()
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/monsters/*" element={<div />} />
      <Route path="/spawn/*" element={<SpawnRoutes />} />
    </Routes>
  )
}

export default MainRoutes