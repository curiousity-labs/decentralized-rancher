import { SunIcon } from "@chakra-ui/icons"
import { Button, Center, Container, Flex, Input } from "@chakra-ui/react"
import { useMemo } from "react"
import { useAccount } from "wagmi"
import { LabelInputWrapper } from "../../components/ui/forms/LabelInputWrapper"
import { Logo } from "../../components/ui/Logo"
import { useRegisterPlayer } from "../../hooks/register/useRegisterPlayer"

export const Register = () => {
  const { address } = useAccount()
  const readonlyAddress = useMemo(() => address || '', [address]);
  
  const { nickname, updateNickName, signMessage, isRegisterLoading } = useRegisterPlayer()
  return (
    <Container>
      <Flex flexDirection="column" justifyContent="center" mt="1rem">
        <Logo size="lg" />
        <Flex
          flexDirection="column"
          gap="1rem"
          bg="gray.300"
          p="2rem"
          m="1.5rem"
          width="40rem"
          mx="auto"
          borderRadius="1rem"
          color="blackAlpha.700"
        >
          <LabelInputWrapper label="Account">
            <Input
              p="1rem"
              borderRadius="0.5rem"
              w="full"
              bg="#FFF"
              outline="none"
              h="4rem"
              value={readonlyAddress}
              fontSize="1.25rem"
              isDisabled
              _disabled={{
                bg: "blackAlpha.400",
                color: "gray.200",
              }}
            />
          </LabelInputWrapper>
          <LabelInputWrapper label="Character Nickname">
            <Input
              p="1rem"
              borderRadius="0.5rem"
              w="full"
              bg="#FFF"
              outline="none"
              h="4rem"
              value={nickname}
              onChange={(e) => updateNickName(e.target.value)}
              // isDisabled={isRegisterLoading}
              fontSize="1.25rem"
            />
          </LabelInputWrapper>
          <Center>
            <Button
              width="fit-content"
              alignSelf="flex-end"
              bg="green.900"
              color="#FFF"
              fontFamily="mono"
              fontSize="1.5rem"
              p="2rem 1.5rem"
              leftIcon={<SunIcon />}
              onClick={() => signMessage()}
              isDisabled={isRegisterLoading || !nickname}
              _hover={{
                _disabled: {
                  bg: 'gray.500'
                },
                bg: "green.800"
              }}
            >
              Sign and Register
            </Button>
          </Center>
        </Flex>
      </Flex>
    </Container>
  )
}
