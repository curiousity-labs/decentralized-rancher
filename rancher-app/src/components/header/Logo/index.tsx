import { Flex, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" lineHeight="0.75rem">
      <Flex alignItems="center" justifyContent="center">
        <Text fontSize="xs" pb="0.25rem" alignSelf="flex-end" letterSpacing="widest" fontWeight="semidbold" fontFamily="sans">
          de
        </Text>
        <Text fontSize="lg" letterSpacing="widest" fontWeight="light" fontFamily="mono">
          \
        </Text>
        <Text fontSize="xs" pt="0.25rem" alignSelf="flex-start" letterSpacing="widest" fontWeight="semidbold" fontFamily="sans">
          centralized
        </Text>
      </Flex>
      <Text fontSize="lg" letterSpacing="widest" fontWeight="semibold" fontFamily="mono">
        Rancher
      </Text>
    </Flex>
  )
}