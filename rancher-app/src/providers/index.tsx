import { ChakraProvider } from "@chakra-ui/react"
import { Web3Provider } from "@decent-org/wallet-provider"
import { web3ProviderConfig } from "../config"
import { theme } from "./chakraUI/theme"
import RancherProvider from "./rancher/RancherProvider"

export function DataProviders({ children }: { children: JSX.Element }) {
  return (
    <ChakraProvider theme={theme}>
      <Web3Provider config={web3ProviderConfig}>
        <RancherProvider>{children}</RancherProvider>
      </Web3Provider>
    </ChakraProvider>
  )
}
