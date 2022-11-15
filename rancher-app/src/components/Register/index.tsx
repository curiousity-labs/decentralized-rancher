import { SunIcon } from "@chakra-ui/icons"
import { Button, Center, Container, Flex, FormLabel, Input, Text } from "@chakra-ui/react"
import { ReactNode } from "react"
import { useAccount } from "wagmi"
import { useRegisterPlayer } from "../../hooks/register/useRegisterPlayer"
import { Logo } from "../ui/Logo"

const LabelInputWrapper = ({ label, children }: { label: string; children: ReactNode }) => {
  return (
    <FormLabel position="relative" my="1rem">
      <Text
        position="absolute"
        top="-0.74rem"
        bg="#FFF"
        px="1rem"
        fontFamily="mono"
        borderTopRightRadius="1rem"
      >
        {label}
      </Text>
      {children}
    </FormLabel>
  )
}

export const Register = () => {
  const { address } = useAccount()
  const { nickName, updateNickName, signMessage, isRegisterLoading } = useRegisterPlayer()
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
              value={address}
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
              value={nickName}
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
              isDisabled={isRegisterLoading || !nickName}
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
