import { Box, Button, Image, Modal, ModalContent, ModalOverlay, Text } from '@chakra-ui/react'
import { NFTMonster } from '../../types'

interface ISpawnModal {
  newMob: NFTMonster | undefined
  onClose: () => void
}

const SpawnModal = ({ newMob, onClose }: ISpawnModal) => {
  return (
    <Modal isOpen={!!newMob} onClose={() => onClose()}>
      <ModalOverlay />
      <ModalContent>
        <Box display='flex' justifyContent='center' alignItems='center' h='100vh'>
          <Box p='8'>
            <Box>
              <Box display='flex' justifyContent='space-between'>
                <Text
                  display='flex'
                  justifyContent='center'
                  fontSize='md'
                  fontWeight='bold'
                  letterSpacing='wide'
                >
                  species
                </Text>
                <Text
                  display='flex'
                  justifyContent='center'
                  fontSize='md'
                  fontWeight='bold'
                  letterSpacing='wide'
                >
                  {newMob!.species}
                </Text>
              </Box>
              <Box display='flex' justifyContent='space-between'>
                <Text
                  display='flex'
                  justifyContent='center'
                  fontSize='md'
                  fontWeight='bold'
                  letterSpacing='wide'
                >
                  type
                </Text>
                <Text
                  display='flex'
                  justifyContent='center'
                  fontSize='md'
                  fontWeight='bold'
                  letterSpacing='wide'
                >
                  {newMob!.type}
                </Text>
              </Box>
            </Box>
            <Box display='flex' justifyContent='center' my='4'>
              <Image src={newMob!.image} w='20rem' maxWidth='24rem' />
            </Box>

            <Box>
              {Object.entries(newMob!.stats).map(([key, value]) => (
                <Box key={key} display='flex' justifyContent='space-between'>
                  <Text
                    display='flex'
                    justifyContent='center'
                    fontSize='md'
                    fontWeight='bold'
                    letterSpacing='wide'
                  >
                    {key}
                  </Text>
                  <Text
                    display='flex'
                    justifyContent='center'
                    fontSize='md'
                    fontWeight='bold'
                    letterSpacing='wide'
                  >
                    {value}
                  </Text>
                </Box>
              ))}
            </Box>
            <Button mx='auto' mt='8' onClick={onClose}>
              Close
            </Button>
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}

export default SpawnModal
