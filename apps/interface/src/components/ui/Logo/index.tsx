import { Flex, Text } from '@chakra-ui/react'

export function Logo({
  variant = 'light',
  size = 'sm',
}: {
  size?: 'sm' | 'lg'
  variant?: 'light' | 'dark'
}) {
  const isLarge = size === 'lg'
  const isDarkTheme = variant === 'dark'

  const color = isDarkTheme ? 'blackAlpha.900' : 'gray.100'

  const lineHeight = isLarge ? '2rem' : '1rem'
  const specialPadding = isLarge ? '0.75rem' : '0.25rem'
  const lgTextFontSize = isLarge ? '4xl' : 'lg'
  const smTextFontSize = isLarge ? '2xl' : 'xs'
  const letterSpacing = isLarge ? '1rem' : 'widest'
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      lineHeight={lineHeight}
      color={color}
    >
      <Flex alignItems='center' justifyContent='center'>
        <Text
          fontSize={smTextFontSize}
          pb={specialPadding}
          letterSpacing={letterSpacing}
          fontWeight='semidbold'
          fontFamily='sans'
        >
          de
        </Text>
        <Text
          fontSize={lgTextFontSize}
          letterSpacing={letterSpacing}
          fontWeight='light'
          fontFamily='mono'
        >
          \
        </Text>
        <Text
          fontSize={smTextFontSize}
          pt={specialPadding}
          letterSpacing={letterSpacing}
          fontWeight='semidbold'
          fontFamily='sans'
        >
          centralized
        </Text>
      </Flex>
      <Text
        fontSize={lgTextFontSize}
        letterSpacing={letterSpacing}
        fontWeight='semibold'
        fontFamily='mono'
      >
        Rancher
      </Text>
    </Flex>
  )
}
