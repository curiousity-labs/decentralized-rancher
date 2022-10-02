import { Grid, GridItem, Text } from "@chakra-ui/react"
import Header from "./components/header"
import MainRoutes from "./routes"

function App() {
  return (
    <Grid
      maxW="8xl"
      mx="auto"
      templateAreas={`"header"
      "main"
      "footer"`}
      gridTemplateRows={"64px 1fr 30px"}
      h="100vh"
    >
      <GridItem px="8" area={"header"}>
        <Header />
      </GridItem>
      <GridItem area={"main"}>
        <MainRoutes />
      </GridItem>
      <GridItem area={"footer"} display="flex" justifyContent="flex-end">
        <Text fontSize="xx-small" px="4" color="whiteAlpha.500">
          git-commit: {process.env.REACT_APP_GIT_HASH}
        </Text>
      </GridItem>
    </Grid>
  )
}

export default App
