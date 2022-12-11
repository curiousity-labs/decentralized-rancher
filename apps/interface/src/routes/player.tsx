import {  useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { BannerLoader } from '../components/loaders/BannerLoader'
import Player from '../pages/Player'
import { GAME_ROUTES } from './definations/game'

const PlayerRoutes = () => {
  const [loading, setLoading] = useState(true)
  const { account } = useParams()


  if (loading) {
    return <BannerLoader />
  }

  return (
    <Routes>
      <Route path={GAME_ROUTES.player.path} element={<Player />} />
      <Route path={GAME_ROUTES.game.path} element={<div />} />
    </Routes>
  )
}

export default PlayerRoutes
