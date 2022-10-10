import { config } from './../settings/application';
import { providers, getDefaultProvider } from "ethers";
import { GOERLI_NETWORK, SEPOLIA_NETWORK, LOCAL_NETWORK } from "../settings";

class Provider {
  public provider?: providers.BaseProvider | providers.JsonRpcProvider
  constructor(
    public network: string,
    public chainID?: string,
  ) {
    this.getProvider()
  }

  getBaseProvider() {
    if (this.chainID) {
      const network = providers.getNetwork(parseInt(this.chainID))
      const baseProvider = getDefaultProvider(network, config.web3.providerKeys)
      this.provider = baseProvider
    }
  }
  getLocalProvider() {
    if (this.chainID) {
      const localProvider = new providers.JsonRpcProvider(
        config.web3.local.url
      );
      this.provider = localProvider
    }
  }

  getProvider() {
    if (this.chainID) {
      if (this.network === LOCAL_NETWORK.network) {
        this.getLocalProvider()
      } else {
        this.getBaseProvider()
      }
    }
  }
}


export class Web3Provider {
  public activeNetworks: Map<string, Provider> = new Map();
  public supportedChainIDs: string[] = []

  constructor() { }

  async connect() {
    const providers =
      [new Provider(GOERLI_NETWORK.network, GOERLI_NETWORK.chaindID),
      new Provider(SEPOLIA_NETWORK.network, SEPOLIA_NETWORK.chaindID),
      new Provider(LOCAL_NETWORK.network, LOCAL_NETWORK.chaindID)]

    const supportedChains: string[] = []
    const activeNetworks = new Map<string, Provider>()
    await Promise.all(providers.map(async (provider: Provider) => {
      if (provider.provider && provider.chainID) {
        if (await provider.provider.detectNetwork().catch(() => console.log(`[${provider.network}] network is unavailable`))) {
          supportedChains.push(provider.chainID)
          activeNetworks.set(provider.chainID, provider)
        }
      }
    }))
    this.activeNetworks = activeNetworks
    this.supportedChainIDs = supportedChains
  }
}

