import { Box, Container } from "@chakra-ui/react"
import Header from "./components/header"
function App() {
  return (
    <Box>
      <Header />
      <Container maxW="6xl" py="1" px="8"></Container>
    </Box>
  )
}

export default App
