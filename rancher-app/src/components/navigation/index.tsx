import { MinusIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Button, Text } from "@chakra-ui/react"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useNavigate } from "react-router-dom"
import { useAccount } from "wagmi"
const Navigation = () => {
  const navigate = useNavigate()
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()
  return (
    <Box display="flex" flexDirection="column" border="2px" borderStyle="groove" borderColor="gray.100" borderRadius="12px" p="4" gap="4">
      {isConnected ? (
        <Button
          leftIcon={<SunIcon />}
          onClick={() => navigate('/register')}
        >
          <Text fontFamily="mono">Register Player</Text>
        </Button>
      ) : (
        <Button
          leftIcon={<MinusIcon />}
          onClick={openConnectModal}
        >
          <Text fontFamily="mono">Connect Wallet</Text>
        </Button>
      )}
    </Box>
  )
}

export default Navigation
