import { NonFungibleToken } from './../../../types/nft';
export enum RancherActions {
  UPDATE_NFT,
  RESET
}

export type RancherActionTypes = { type: RancherActions.UPDATE_NFT, payload: NonFungibleToken[] } | { type: RancherActions.RESET }