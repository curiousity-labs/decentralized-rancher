import { Box, Button, Image, Text } from "@chakra-ui/react"
import { useRancher } from "../../providers/rancher/hooks/useRancher"
import noImage from "../../assets/images/no-image-icon-23.svg"
import { useState } from "react"
import { NonFungibleToken } from "../../types"
import { spawnCreate } from "../../features/monsters/spawn"
const Spawn = () => {
  const {
    state: { nfts },
  } = useRancher()

  const [selected, setSelected] = useState<NonFungibleToken>()

  const spawnNewCreate = () => {
    if (selected) {
      const newMob = spawnCreate(selected)
    }
  }
  return (
    <Box p="8">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb="4">
        <Box>
          <Text fontSize="lg" letterSpacing="1px">
            Choose NFT
          </Text>
        </Box>
        <Button isDisabled={!selected}>Spawn Creature</Button>
      </Box>
      <Text fontSize="2xs" fontFamily="mono" letterSpacing="0.23px">
        ERC 721
      </Text>
      <Box
        border="1px"
        borderColor="whiteAlpha.400"
        borderStyle="inset"
        p="4"
        h="28rem"
        overflowY="scroll"
      >
        <Box display="flex" flexWrap="wrap" justifyContent="space-around" w="fit-content" gap="2">
          {nfts.map((nft) => (
            <Box
              key={`${nft.contractAddress}:${nft.tokenID}`}
              bg={
                selected?.contractAddress === nft.contractAddress &&
                selected?.tokenID === nft.tokenID
                  ? "green.700"
                  : "black"
              }
              rounded="lg"
              py="4"
              px="8"
              my="4"
              w="20rem"
              onClick={() => setSelected(nft)}
            >
              <Box mb="4" textAlign="center">
                <Text
                  display="flex"
                  justifyContent="center"
                  fontSize="2xs"
                  fontWeight="bold"
                  letterSpacing="wide"
                >
                  {nft.tokenName}
                </Text>
                <Text
                  display="flex"
                  justifyContent="center"
                  fontSize="2xs"
                  fontWeight="semibold"
                  letterSpacing="widest"
                >
                  {nft.tokenSymbol}
                </Text>
              </Box>

              <Box display="flex" justifyContent="center" mb="8">
                <Image src={nft.imageURL || noImage} w="10rem" maxWidth="24rem" />
              </Box>

              <Box>
                <Box mb="4">
                  <Text fontSize="2xs" fontWeight="thin" letterSpacing="wide">
                    Contract Address
                  </Text>
                  <Text fontSize="xs" letterSpacing="wide">
                    {nft.contractAddress}
                  </Text>
                </Box>
                <Box>
                  <Text fontSize="2xs" fontWeight="thin" letterSpacing="wide">
                    Token ID
                  </Text>
                  <Text fontSize="xs" letterSpacing="wide">
                    {nft.tokenID}
                  </Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Spawn
