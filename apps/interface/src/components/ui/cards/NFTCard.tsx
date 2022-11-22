import { Box, Text, Image } from "@chakra-ui/react"
import { NonFungibleToken } from "../../../types"
import noImage from "../../assets/images/no-image-icon-23.svg"

interface INFTCard {
  nft: NonFungibleToken
  selected: NonFungibleToken | undefined
  setSelected: React.Dispatch<React.SetStateAction<NonFungibleToken | undefined>>
}

const NFTCard = ({ nft, selected, setSelected }: INFTCard) => {
  return (
    <Box
      bg={
        selected?.contractAddress === nft.contractAddress && selected?.tokenID === nft.tokenID
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
  )
}

export default NFTCard
