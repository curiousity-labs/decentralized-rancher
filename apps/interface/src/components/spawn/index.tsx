import { Box, Button, Text } from '@chakra-ui/react'
import { useRancher } from '../../providers/rancher/hooks/useRancher'
import { useState } from 'react'
import { NFTMonster, NonFungibleToken } from '../../types'
// import { spawnCreate } from "../../features/monsters/spawn"
import NFTCard from '../ui/cards/NFTCard'
import SpawnModal from './SpawnModal'
const Spawn = () => {
  const {
    state: { nfts },
  } = useRancher()

  const [selected, setSelected] = useState<NonFungibleToken>()
  const [spawnedMonster, setSpawnMonster] = useState<NFTMonster>()

  const spawnNewCreate = () => {
    if (selected) {
      // setSpawnMonster(spawnCreate(selected))
    }
  }

  const closeModal = () => {
    setSelected(undefined)
    setSpawnMonster(undefined)
  }

  if (spawnedMonster) {
    return <SpawnModal newMob={spawnedMonster} onClose={closeModal} />
  }
  return (
    <Box p='8'>
      <Box display='flex' justifyContent='space-between' alignItems='center' mb='4'>
        <Box>
          <Text fontSize='lg' letterSpacing='1px'>
            Choose NFT
          </Text>
        </Box>
        <Button isDisabled={!selected} onClick={spawnNewCreate}>
          Spawn Creature
        </Button>
      </Box>
      <Text fontSize='2xs' fontFamily='mono' letterSpacing='0.23px'>
        ERC 721
      </Text>
      <Box
        border='1px'
        borderColor='whiteAlpha.400'
        borderStyle='inset'
        p='4'
        h='28rem'
        overflowY='scroll'
      >
        <Box display='flex' flexWrap='wrap' justifyContent='space-around' w='fit-content' gap='2'>
          {nfts.map((nft) => (
            <NFTCard
              key={`${nft.contractAddress}:${nft.tokenID}`}
              nft={nft}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Spawn
