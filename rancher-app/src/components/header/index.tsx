import { Box, Text } from "@chakra-ui/react"
import Account from "./Account"

const Header = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Text fontSize={["2xl", "3xl"]} letterSpacing="widest" fontWeight="boldest" fontFamily="mono">
          NFT Rancher
        </Text>
      </Box>
      <Account />
    </Box>
  )
}

export default Header