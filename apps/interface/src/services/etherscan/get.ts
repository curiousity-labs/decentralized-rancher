import { ETHERSCAN_BASE_URL } from './../../constants/index';
import axios from 'axios'
import { EtherscanEventResponse, Erc721TransferEvent, ERC721Data } from '../../types';

export const retrieveERC721TransferEvents = async (account: string): Promise<ERC721Data[]> => {
  const params = new URLSearchParams({
    module: 'account',
    action: 'tokennfttx',
    address: account,
    apikey: import.meta.env.VITE_ETHERSCAN_ID || '',
    page: "1",
    limit: "50"
  })

  const response = await axios.get<EtherscanEventResponse<Erc721TransferEvent[]>>(`${ETHERSCAN_BASE_URL}?${params}`)
  const transferEventsRaw = response.data.result
  const mappedEvents = new Map<string, ERC721Data>()

  transferEventsRaw.forEach((event: Erc721TransferEvent) => {
    const {
      contractAddress,
      from,
      input,
      nonce,
      timeStamp,
      to,
      tokenID,
      tokenName,
      tokenSymbol } = event
    const key = `${contractAddress}:${tokenID}`
    // nft ignore or remove nft that has left account
    if (from === account) {
      // if transfer has been mapped remove it
      if (mappedEvents.has(key)) {
        mappedEvents.delete(key)
      }
      return;
    }
    // capture nft that has been sent to account.
    if (to.toLowerCase() === account.toLowerCase()) {
      mappedEvents.set(key, {
        contractAddress,
        from,
        input,
        nonce,
        timeStamp,
        to,
        tokenID,
        tokenName,
        tokenSymbol
      })
    }
  })
  return Array.from<ERC721Data>(mappedEvents.values()).filter(nft => nft.input !== 'deprecated').filter((_, index) => index < 100);
}