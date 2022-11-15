import { Flex } from "@chakra-ui/react"
import Navigation from "../navigation"
import { Logo } from "../ui/Logo"

const Dashboard = () => {
  return (
    <Flex justifyContent="center" alignItems="center" >
      <Flex flexDirection="column" gap="1rem">
        <Logo variant="dashboard" />
        <Navigation />
      </Flex>
    </Flex>
  )
}

export default Dashboard