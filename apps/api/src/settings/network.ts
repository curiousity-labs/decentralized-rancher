import { config } from "./application"

export const GOERLI_NETWORK = {
  network: 'goerli',
  chaindID: '5',
}
export const SEPOLIA_NETWORK = {
  network: 'sepolia',
  chaindID: '11155111',
}
export const LOCAL_NETWORK = {
  network: 'localhost',
  chaindID: config.web3.local.chainID,
}