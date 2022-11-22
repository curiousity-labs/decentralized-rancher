import { Route, Routes } from "react-router-dom"
import Home from "../components/home"
import { Register } from "../components/Register"
import { useKeyPresses } from "../hooks/useKeyPresses"
import { BASE_ROUTES } from "./definations/base"

const MainRoutes = () => {
  useKeyPresses()
  return (
    <Routes>
      <Route path={BASE_ROUTES.home.path} element={<Home />} />
      <Route path={BASE_ROUTES.register.path} element={<Register />} />
      <Route path={BASE_ROUTES.players.path} element={<div />} />
    </Routes>
  )
}

export default MainRoutes