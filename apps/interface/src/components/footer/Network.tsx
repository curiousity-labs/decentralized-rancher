import { Flex, Text, Box } from "@chakra-ui/react"
import { useNetwork } from "wagmi"

export const Network = () => {
  const { chain } = useNetwork()

  if (chain) {
    return (
      <Flex justifyContent="center" alignItems="center" gap="0.5rem" px="0.5rem" mx="0.5rem">
        <Text fontSize="2xs" fontWeight="light" fontFamily="sans">{chain.name}</Text>
        <Box bg={'yellow.300'} rounded="full" boxSize="0.75rem" />{" "}
      </Flex>
    )
  }
  return null
}
