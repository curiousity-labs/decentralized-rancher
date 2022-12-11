import { Box, Flex } from '@chakra-ui/react'
import { Wave } from '../ui/animations/Wave'



export const BannerLoader = () => {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <Box
        h='12.5rem'
        bg='yellow.900'
        w='full'
        borderY='2px double'
        borderColor='whiteAlpha.400'
        px="2rem"
      >
        <Wave />
      </Box>
    </Flex>
  )
}
