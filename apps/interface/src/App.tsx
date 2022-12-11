import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Network } from './components/footer/Network'
import HeaderAccountDisplay from './components/header/HeaderAccountDisplay'
import { Logo } from './components/ui/Logo'
import { FOOTER_HEIGHT, HEADER_HEIGHT } from './constants'
import { BASE_ROUTES } from './routes/definations/base'
import MainRoutes from './routes/root'
import { addREM } from './utils'

function App() {
  return (
    <Flex flexDirection='column' justifyContent='space-between' minHeight='100vh'>
      <Flex
        px='1.5rem'
        h={addREM(HEADER_HEIGHT)}
        bg='linear-gradient(180deg, #272520 0%, #212185 100%)'
        alignItems='center'
        justifyContent='space-between'
      >
        <Link to={BASE_ROUTES.home.relative()}>
          <Logo />
        </Link>
        <HeaderAccountDisplay />
      </Flex>
      <Flex flexDirection='column'>
        <MainRoutes />
      </Flex>
      <Flex justifyContent='space-between' h={addREM(FOOTER_HEIGHT)}>
        <Network />
        <Text fontSize='2xs' px='4' color='whiteAlpha.500'>
          git-commit: {import.meta.env.VITE_GIT_HASH}
        </Text>
      </Flex>
    </Flex>
  )
}

export default App
