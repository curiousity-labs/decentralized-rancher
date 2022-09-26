import { ChakraProvider } from "@chakra-ui/react"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { WagmiConfig } from "wagmi"
import { chains, wagmiClient } from "./rainboxKit/wagmi.config"

export function DataProviders({ children }: { children: JSX.Element }) {
  return (
    <ChakraProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  )
}
