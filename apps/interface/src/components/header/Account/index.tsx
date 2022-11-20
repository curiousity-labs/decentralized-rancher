import { NotAllowedIcon } from "@chakra-ui/icons"
import { Button, IconButton, Flex, Text } from "@chakra-ui/react"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useAccount, useDisconnect, useEnsName } from "wagmi"
import { createAccountSubstring } from "../../../helpers/string"

const Account = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { openConnectModal } = useConnectModal();

  const { data } = useEnsName({ address })

  if (!address) {
    return <Button variant="ghost" onClick={openConnectModal}>Connect Wallet</Button>
  }
  // if account is connected
  return (
    <Flex alignItems="center" gap="1rem">
      <Text fontSize="lg" fontFamily="sans">{data ? data : createAccountSubstring(address)}</Text>
      <IconButton
        aria-label="Account Disconnect"
        icon={<NotAllowedIcon boxSize="1.5rem" />}
        color="red.400"
        variant="unstyled"
        minW="0"
        p="0px"
        m="0px"
        onClick={() => disconnect()}
      />
    </Flex>
  )
}

export default Account
