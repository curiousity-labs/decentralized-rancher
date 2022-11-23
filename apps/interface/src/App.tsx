import { Box, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useNetwork } from "wagmi"
import Account from "./components/header/HeaderAccountDisplay"
import { Logo } from "./components/ui/Logo"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "./constants"
import MainRoutes from "./routes"
import { BASE_ROUTES } from "./routes/definations/base"
import { addREM } from "./utils"

const Network = () => {
  const { chain } = useNetwork()

  if (chain) {
    return (
      <Flex justifyContent="center" alignItems="center" gap="0.5rem" px="0.5rem" mx="0.5rem">
        <Text fontSize="2xs" fontWeight="light" fontFamily="sans">{chain.name}</Text>
        <Box bg={'yellow.300'} rounded="full" boxSize="0.75rem" />{" "}
      </Flex>
    )
  }
  return null
}

function App() {
  return (
    <Flex flexDirection="column" justifyContent="space-between" minHeight="100vh">
      <Flex px="1.5rem" h={addREM(HEADER_HEIGHT)} bg="linear-gradient(180deg, #272520 0%, #212185 100%)" alignItems="center" justifyContent="space-between">
        <Link to={BASE_ROUTES.home.relative()}>
          <Logo />
        </Link>
        <Account />
      </Flex>
      <Box flexGrow={1}>
        <MainRoutes />
      </Box>
      <Flex justifyContent="space-between" h={addREM(FOOTER_HEIGHT)}>
        <Network />
        <Text fontSize="2xs" px="4" color="whiteAlpha.500">
          git-commit: {import.meta.env.VITE_GIT_HASH}
        </Text>
      </Flex>
    </Flex>
  )
}

export default App
