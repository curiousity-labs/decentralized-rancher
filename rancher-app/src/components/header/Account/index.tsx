import { NotAllowedIcon } from "@chakra-ui/icons"
import { Button, Box, IconButton } from "@chakra-ui/react"
import { useWeb3Provider } from "@decent-org/wallet-provider"
import { createAccountSubstring } from "../../../helpers/string"
import useNetwork from "../../../hooks/useNetwork"

const Network = () => {
  const {
    state: { chainId },
  } = useWeb3Provider()
  const networkDetails = useNetwork(chainId)

  if (networkDetails) {
    return (
      <Box display="flex" justifyContent="flex-end">
        <Box display="flex" alignItems="center" gap="2">
          network: {networkDetails.name}{" "}
          <Box bg={networkDetails.color} rounded="full" w="4" h="4" />{" "}
        </Box>
      </Box>
    )
  }
  return null
}
const Account = () => {
  const {
    connect,
    disconnect,
    state: { account },
  } = useWeb3Provider()

  if (!account) {
    return (
      <Box display="flex" gap="4">
        <Network />
        <Button onClick={connect}>Connect Wallet</Button>
      </Box>
    )
  }
  // if account is connected
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Network />
      <Box display="flex" alignItems="center" gap="4">
        {createAccountSubstring(account)}
        <IconButton
          aria-label="Account Disconnect"
          icon={<NotAllowedIcon />}
          color="red.400"
          variant="unstyled"
          minW="0"
          onClick={disconnect}
        />
      </Box>
    </Box>
  )
}

export default Account
