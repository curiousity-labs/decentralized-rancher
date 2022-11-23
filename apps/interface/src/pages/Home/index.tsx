import { Flex } from "@chakra-ui/react"
import Navigation from "../../components/home/navigation"
import { Logo } from "../../components/ui/Logo"
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../../constants"
import { addREM } from "../../utils"

const Home = () => {
  return (
      <Flex minH={`calc(100vh - ${addREM(HEADER_HEIGHT + FOOTER_HEIGHT)})`} justifyContent="center" alignItems="center">
        <Flex flexDirection="column" gap="1rem">
          <Logo size="lg" />
          <Navigation />
        </Flex>
      </Flex>
  )
}

export default Home