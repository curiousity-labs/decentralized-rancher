import { ChakraProvider } from '@chakra-ui/react'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { chains, wagmiClient } from '../config/rainbow-kit.config'
import { theme } from './chakraUI/theme'
import RancherProvider from './rancher/RancherProvider'

export function DataProviders({ children }: { children: JSX.Element }) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} modalSize='compact'>
          <RancherProvider>{children}</RancherProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}
