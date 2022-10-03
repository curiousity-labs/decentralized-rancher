import { NonFungibleToken } from './../../../types/nft';
import { RancherActions } from './../actions/index';
import { useWeb3Provider } from '@decent-org/wallet-provider';
import { useEffect } from "react";
import { retrieveERC721TransferEvents } from "../../../services/etherscan";
import { RancherActionTypes } from '../actions';
import { retrieveERC721 } from '../../../services/opensea';

export const useLoadAccountNFTs = (dispatch: React.Dispatch<RancherActionTypes>) => {
  const { state: { account } } = useWeb3Provider();

  useEffect(() => {
    if (!account) {
      dispatch({ type: RancherActions.RESET })
    }
  }, [account, dispatch])
  useEffect(() => {
    const retrieveAccountNFTs = async (account: string) => {
      const eventNfts = await retrieveERC721TransferEvents(account);
      const nfts = await retrieveERC721(eventNfts, account);

      const mappedAssets = new Map<string, NonFungibleToken>();

      eventNfts.forEach((eventNft) => {
        const key = `${eventNft.contractAddress}:${eventNft.tokenID}`
        mappedAssets.set(key, {
          contractAddress: eventNft.contractAddress,
          tokenID: eventNft.tokenID,
          tokenName: eventNft.tokenName,
          tokenSymbol: eventNft.tokenSymbol,
          metadata: undefined
        })
      })
      nfts.forEach((nft) => {
        const key = `${nft.asset_contract.address}:${nft.token_id}`
        mappedAssets.set(key, {
          contractAddress: nft.asset_contract.address,
          tokenID: nft.token_id || undefined,
          tokenName: nft.asset_contract.name || undefined,
          tokenSymbol: nft.asset_contract.symbol || undefined,
          imageURL: nft.image_url || undefined,
          metadata: nft.traits
        })
      })
      dispatch({ type: RancherActions.UPDATE_NFT, payload: Array.from(mappedAssets.values()) })
    }

    if (account) {
      retrieveAccountNFTs(account);
    }
  }, [account, dispatch])
  return;
}
