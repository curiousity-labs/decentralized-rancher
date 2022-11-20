export interface EtherscanEventResponse<T> {
  message: string
  result: T,

}

export type Erc721TransferEvent = {
  blockNumber: string,
  timeStamp: string,
  hash: string,
  nonce: string,
  blockHash: string,
  from: string,
  contractAddress: string,
  to: string,
  tokenID: string,
  tokenName: string,
  tokenSymbol: string,
  tokenDecimal: string,
  transactionIndex: string,
  gas: string,
  gasPrice: string,
  gasUsed: string,
  cumulativeGasUsed: string,
  input: string,
  confirmations: string
}

export type ERC721Data = {
  contractAddress: string,
  from: string,
  input: string,
  nonce: string,
  timeStamp: string,
  to: string,
  tokenID: string,
  tokenName: string,
  tokenSymbol: string
}