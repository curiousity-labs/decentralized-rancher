import { Box, Image, Text } from "@chakra-ui/react"
import { useRancher } from "../../providers/rancher/hooks/useRancher"
import noImage from "../../assets/images/no-image-icon-23.svg"

const DisplayNFTs = () => {
  const {
    state: { nfts },
  } = useRancher()

  return (
    <Box display="flex" justifyContent="center">
      <Box
        display="flex"
        gap="8"
        flexWrap="wrap"
        justifyContent="space-between"
        w="fit-content"
        maxWidth="6xl"
      >
        {nfts.map((nft) => (
          <Box
            key={`${nft.contractAddress}:${nft.tokenID}`}
            bg="whiteAlpha.300"
            rounded="lg"
            py="4"
            px="8"
          >
            <Box mb="4">
              <Text
                display="flex"
                justifyContent="center"
                fontSize="xl"
                fontWeight="bold"
                letterSpacing="wide"
              >
                {nft.tokenName}
              </Text>
              <Text
                display="flex"
                justifyContent="center"
                fontSize="lg"
                fontWeight="semibold"
                letterSpacing="widest"
              >
                {nft.tokenSymbol}
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" mb="8">
              <Image src={nft.imageURL || noImage} h="12rem" maxWidth="24rem" />
            </Box>
            <Box>
              <Box mb="4">
                <Text fontSize="xs" fontWeight="thin" letterSpacing="wide">Contract Address</Text>
                <Text>{nft.contractAddress}</Text>
              </Box>
              <Box>
                <Text fontSize="xs" fontWeight="thin" letterSpacing="wide">Token ID</Text>
                <Text>{nft.tokenID}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default DisplayNFTs
