import { config } from './../settings/application';
import { providers, getDefaultProvider } from "ethers";
import { GOERLI_NETWORK, SEPOLIA_NETWORK, LOCAL_NETWORK } from "../settings";
import { Application } from 'express';

class Provider {
  public provider: providers.BaseProvider | providers.JsonRpcProvider = getDefaultProvider(providers.getNetwork(5), config.web3.providerKeys)
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
  public activeNetworks: Map<string, providers.BaseProvider | providers.JsonRpcProvider> = new Map();

  constructor(private app: Application) { }

  async connect() {
    const providers =
      [new Provider(GOERLI_NETWORK.network, GOERLI_NETWORK.chaindID),
      new Provider(SEPOLIA_NETWORK.network, SEPOLIA_NETWORK.chaindID),
      new Provider(LOCAL_NETWORK.network, LOCAL_NETWORK.chaindID)]

    const activeNetworks = new Map<string, providers.BaseProvider | providers.JsonRpcProvider>()
    await Promise.all(providers.map(async (provider: Provider) => {
      if (provider.provider && provider.chainID) {
        const networkDetected = await provider.provider.detectNetwork().catch(() => {console.log(`[${provider.network}] network is unavailable`)})
        if (!!networkDetected) {
          console.log(`${provider.network} available`)
          activeNetworks.set(provider.chainID, provider.provider)
        }
      }
    }))
      this.activeNetworks = activeNetworks
    this.app.set('web3', this)
  }
}

