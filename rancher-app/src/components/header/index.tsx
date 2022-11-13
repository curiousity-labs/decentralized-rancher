import { Flex } from "@chakra-ui/react"
import Account from "./Account"
import { Logo } from "./Logo"

const Header = () => {
  return (
    <Flex px="1.5rem" h="4rem" bg="linear-gradient(180deg, #272520 0%, #212185 100%)" alignItems="center" justifyContent="space-between">
      <Logo />
      <Account />
    </Flex>
  )
}

export default Header
