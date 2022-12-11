import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { Register } from '../pages/Register'
import { BASE_ROUTES } from './definations/base'
import PlayerRoutes from './player'

const MainRoutes = () => (
  // @todo if JWT exists redirect to player dashboard
  // should start in loading state until verified
  <Routes>
    <Route path={BASE_ROUTES.home.path} element={<Home />} />
    <Route path={BASE_ROUTES.register.path} element={<Register />} />
    <Route path={BASE_ROUTES.players.path} element={<PlayerRoutes />} />
  </Routes>
)
export default MainRoutes
