import '@rainbow-me/rainbowkit/styles.css';

import {
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import {
  chain,
  configureChains,
  createClient,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';


export const { chains, provider } = configureChains(
  [chain.goerli, chain.localhost],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),
    infuraProvider({ apiKey: process.env.REACT_APP_INFURA_ID }),
    publicProvider()
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }),
      ledgerWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})