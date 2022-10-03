import { Route, Routes } from "react-router-dom"
import Spawn from "../components/spawn"
import { useKeyPresses } from "../hooks/useKeyPresses"

const SpawnRoutes = () => {
  useKeyPresses()
  return (
    <Routes>
      <Route index element={<Spawn />} />
    </Routes>
  )
}

export default SpawnRoutes