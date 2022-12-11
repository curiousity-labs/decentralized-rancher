import { Box, Center, keyframes, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const waveAnimationKeyframes = keyframes`
  0%   { height: 50%;  left: 0%;    }
  25%  { height: 0%; left: 100%; }
  50%  { height: 50%;  left: 0%;    }
  75%  { height: 0%; left: 100%; }
  100% { height: 50%;  left: 0%;  top: 0 }
`;
const waveAnimationKeyframesRight = keyframes`
  0%   { height: 50%;  right: 0%;    }
  25%  { height: 0%; right: 100%; }
  50%  { height: 50%;  right: 0%;    }
  75%  { height: 0%; right: 100%; }
  100% { height: 50%;  right: 0%;  top: 0 }
`;


export function Wave() {
  const array = new Array(10).fill(undefined, 0, 10)
  return (
    <Box h="full" position="relative">
      <Center h="full" zIndex="20">
        <Text fontSize="5xl" letterSpacing="1rem" color="">Loading</Text>
      </Center>
      {array.map((_, i) => (
        <Box
          key={i}
          as={motion.div}
          animation={`${waveAnimationKeyframes} 4s ${100 * i}ms infinite`}
          width="8px"
          height="100%"
          borderTopRadius="4px"
          position="absolute"
          bottom="0"
          background="currentColor"
          color="green.200"
          boxSizing="border-box"
        />
      ))}
      {array.map((_, i) => (
        <Box
          key={i}
          as={motion.div}
          animation={`${waveAnimationKeyframesRight} 4s ${100 * i}ms infinite`}
          width="8px"
          height="100%"
          borderTopRadius="4px"
          position="absolute"
          bottom="0"
          background="currentColor"
          color="green.100"
          boxSizing="border-box"
        />
      ))}


    </Box>
  );
}
