import { Route, Routes } from "react-router-dom"
import Dashboard from "../components/dashboard"
import { useKeyPresses } from "../hooks/useKeyPresses"

const MainRoutes = () => {
  useKeyPresses()
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<div />} />
    </Routes>
  )
}

export default MainRoutes