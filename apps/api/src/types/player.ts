
export interface Player {
  id: string,
  address: string,
  signature: string,
  level: string,
  nickname: string,
  ENSAvatar: string,
  ENSName: string,
  ENSDiscord: string,
  ENSTwitter: string,
  NetworkId: string,
}

export type NewPlayerRequestParams = {
  address: string,
  signature: string,
  nickname: string,
  chainId: string,
}