import { NotAllowedIcon } from "@chakra-ui/icons"
import { Button, Box, IconButton } from "@chakra-ui/react"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useAccount, useDisconnect, useNetwork } from "wagmi"
import { createAccountSubstring } from "../../../helpers/string"

const Network = () => {
  const { chain } = useNetwork()

  if (chain) {
    return (
      <Box display="flex" justifyContent="flex-end">
        <Box display="flex" alignItems="center" gap="2">
          network: {chain.name}{" "}
          <Box bg={'yellow.300'} rounded="full" w="4" h="4" />{" "}
        </Box>
      </Box>
    )
  }
  return null
}
const Account = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { openConnectModal } = useConnectModal();

  if (!address) {
    return (
      <Box display="flex" gap="4">
        <Network />
        <Button onClick={openConnectModal}>Connect Wallet</Button>
      </Box>
    )
  }
  // if account is connected
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Network />
      <Box display="flex" alignItems="center" gap="4">
        {createAccountSubstring(address)}
        <IconButton
          aria-label="Account Disconnect"
          icon={<NotAllowedIcon />}
          color="red.400"
          variant="unstyled"
          minW="0"
          onClick={() => disconnect()}
        />
      </Box>
    </Box>
  )
}

export default Account
