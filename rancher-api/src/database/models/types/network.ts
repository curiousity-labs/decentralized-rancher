export interface Network {
  id: string;
  networkName: string;
  chainId: number;
  isTestNetwork: boolean;
  rpcURL: string;
  networkColor: string;
  blockExplorerURL: string;
}