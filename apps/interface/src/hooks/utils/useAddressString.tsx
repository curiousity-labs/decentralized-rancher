import { useCallback, useEffect, useState } from "react"
import { useProvider } from "wagmi"
import { EthAddress } from "../../types/common"
import { useStringMethods } from "./useStringMethods"


export const useAddressString = (address: EthAddress | undefined) => {
  const [displayName, setDisplayName] = useState('');
  const provider = useProvider()

  const lookupENS = useCallback(async (address: EthAddress) => {
    return await provider.lookupAddress(address).catch()
  }, [provider])
  
  const { addressSubString } = useStringMethods();

  useEffect(() => {
    if(!address) {
      setDisplayName('');
      return;
    }

    (async () => {
      const ensname = await lookupENS(address);
      if(ensname) {
        setDisplayName(ensname)
        return
      }
      setDisplayName(addressSubString(address))
    })()

  }, [address, addressSubString, lookupENS])

  return { displayName }
}