import { ChakraProvider } from "@chakra-ui/react"
import { Web3Provider } from "@decent-org/wallet-provider"
import { web3ProviderConfig } from "../config"

export function DataProviders({ children }: { children: JSX.Element }) {
  return (
    <ChakraProvider>
      <Web3Provider config={web3ProviderConfig()}>{children}</Web3Provider>
    </ChakraProvider>
  )
}
