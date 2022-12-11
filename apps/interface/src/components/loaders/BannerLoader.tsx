import { Box, Flex, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Wave } from '../ui/animations/Wave'

const animationKeyframes = keyframes`
  0% { left: 10%; transform: scale(1) rotate(0); border-radius: 20%;}
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { left: 90%; transform: scale(1) rotate(0); border-radius: 20%; }
`

const animation = `${animationKeyframes} 2s ease-in-out infinite`

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
