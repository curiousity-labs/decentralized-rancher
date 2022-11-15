import { Flex, Text } from "@chakra-ui/react";

export function Logo({ variant = 'header' }: { variant?: 'header' | 'dashboard' }) {
  const isLarge = variant === 'dashboard'

  const lineHeight = isLarge ? "2rem" : "1rem"
  const specialPadding = isLarge ? "0.75rem" : "0.25rem"
  const lgTextFontSize = isLarge ? "4xl" : "lg"
  const smTextFontSize = isLarge ? "2xl" : "xs"
  const letterSpacing = isLarge ? "1rem" : "widest"
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" lineHeight={lineHeight}>
      <Flex alignItems="center" justifyContent="center">
        <Text fontSize={smTextFontSize} pb={specialPadding} alignSelf="flex-end" letterSpacing={letterSpacing} fontWeight="semidbold" fontFamily="sans">
          de
        </Text>
        <Text fontSize={lgTextFontSize} letterSpacing={letterSpacing} fontWeight="light" fontFamily="mono">
          \
        </Text>
        <Text fontSize={smTextFontSize} pt={specialPadding} alignSelf="flex-start" letterSpacing={letterSpacing} fontWeight="semidbold" fontFamily="sans">
          centralized
        </Text>
      </Flex>
      <Text fontSize={lgTextFontSize} letterSpacing={letterSpacing} fontWeight="semibold" fontFamily="mono">
        Rancher
      </Text>
    </Flex>
  )
}