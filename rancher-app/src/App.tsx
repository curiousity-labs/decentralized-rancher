import { Box, Button, Container, Text } from "@chakra-ui/react"
import { useWeb3Provider } from "@decent-org/wallet-provider"
function App() {
  const { connect } = useWeb3Provider()
  return (
    <Box>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center" py="1" px="8">
        {/* Title/logo */}
        <Box>
          <Text fontSize="3xl" letterSpacing="widest" fontWeight="boldest" fontFamily="mono">NFT Rancher</Text>
        </Box>
        <Box>
          <Button onClick={connect}>Connect Wallet</Button>
        </Box>
      </Box>
      {/* Body */}
      <Container maxW="6xl"></Container>
    </Box>
  )
}

export default App
