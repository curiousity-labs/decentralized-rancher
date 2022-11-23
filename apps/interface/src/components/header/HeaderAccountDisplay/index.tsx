import { NotAllowedIcon } from "@chakra-ui/icons"
import { Button, IconButton, Flex, Text } from "@chakra-ui/react"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import { useAccount, useDisconnect } from "wagmi"
import { useAddressString } from "../../../hooks/utils/useAddressString"

const HeaderAccountDisplay = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { openConnectModal } = useConnectModal();

  const { displayName } = useAddressString(address)

  if (!address) {
    return <Button variant="ghost" onClick={openConnectModal}>Connect Wallet</Button>
  }
  return (
    <Flex alignItems="center" gap="1rem">
      <Text fontSize="lg" fontFamily="sans">{displayName}</Text>
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

export default HeaderAccountDisplay
