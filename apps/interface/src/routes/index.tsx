import { Route, Routes } from "react-router-dom"
import Dashboard from "../components/dashboard"
import { Register } from "../components/Register"
import { useKeyPresses } from "../hooks/useKeyPresses"

const MainRoutes = () => {
  useKeyPresses()
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default MainRoutes