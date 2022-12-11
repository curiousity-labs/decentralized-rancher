import { OPENSEA_TESTNET_BASE_URL } from './../../constants/index'
import axios from 'axios'
import { ERC721Data, OpenseaAsset, OpenseaResponse } from '../../types'

export const retrieveERC721 = async (
  mappedNfts: ERC721Data[],
  account: string,
): Promise<OpenseaAsset[]> => {
  const params = new URLSearchParams({ limit: '100', owner: account })
  mappedNfts.forEach((nft) => {
    params.append('asset_contract_addresses', nft.contractAddress)
    params.append('token_ids', nft.tokenID)
  })

  const response = await axios.get<OpenseaResponse<OpenseaAsset>>(
    `${OPENSEA_TESTNET_BASE_URL}/assets?${params}`,
  )
  return response.data.assets
}
