import { Flex } from "@chakra-ui/react"
import Account from "./Account"
import { Logo } from "../ui/Logo"
import { Link } from "react-router-dom"
import { HEADER_HEIGHT } from "../../constants"
import { addREM } from "../../utils"

const Header = () => {
  return (
    <Flex px="1.5rem" h={addREM(HEADER_HEIGHT)} bg="linear-gradient(180deg, #272520 0%, #212185 100%)" alignItems="center" justifyContent="space-between">
      <Link to="/">
        <Logo />
      </Link>
      <Account />
    </Flex>
  )
}

export default Header
