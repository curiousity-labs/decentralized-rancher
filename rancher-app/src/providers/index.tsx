import { ChakraProvider } from "@chakra-ui/react"
import { Web3Provider } from "@decent-org/wallet-provider"
import { web3ProviderConfig } from "../config"
import { theme } from "./chakraUI/theme"

export function DataProviders({ children }: { children: JSX.Element }) {
  return (
    <ChakraProvider theme={theme}>
      <Web3Provider config={web3ProviderConfig}>{children}</Web3Provider>
    </ChakraProvider>
  )
}
