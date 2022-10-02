import { Box, Container } from "@chakra-ui/react"
import Header from "./components/header"
import DisplayNFTs from "./components/nfts/DisplayNFTs"
function App() {
  return (
    <Box>
      <Header />
      <Container py="1" px="8">
        <DisplayNFTs />
      </Container>
    </Box>
  )
}

export default App
