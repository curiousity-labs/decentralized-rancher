export interface Network {
  id: string;
  networkName: string;
  chainId: number,
  isTestNetwork: boolean,
  rpcURL: string,
  logoURL: string,
  blockExplorerURL: string,
}