import { useMemo } from "react"
import { useEnsName } from "wagmi"
import { EthAddress } from "../../types/common"
import { useStringMethods } from "./useStringMethods"

export const useAddressString = (address: EthAddress | undefined) => {
  const { data, isLoading } = useEnsName({
    address,
  })
  const { addressSubString } = useStringMethods();

  const displayName = useMemo(() => {
    if (!address) {
      return ''
    }
    if (!data && !isLoading) {
      return addressSubString(address)
    }
    return data;
  }, [address, data, isLoading, addressSubString])


  return { displayName }
}