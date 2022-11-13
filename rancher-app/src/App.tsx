import { Box, Flex, Text } from "@chakra-ui/react"
import { useNetwork } from "wagmi"
import Header from "./components/header"
import MainRoutes from "./routes"

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
      <Header />
      <Box minHeight="calc(4rem - 100vh)">
        <MainRoutes />
      </Box>
      <Flex justifyContent="space-between" p="0.5rem">
        <Network />
        <Text fontSize="2xs" px="4" color="whiteAlpha.500">
          git-commit: {process.env.REACT_APP_GIT_HASH}
        </Text>
      </Flex>
    </Flex>
  )
}

export default App
