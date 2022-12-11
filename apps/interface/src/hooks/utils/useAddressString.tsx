import { useCallback, useEffect, useState } from 'react'
import { useProvider } from 'wagmi'
import { EthAddress } from '../../types/common'
import { useStringMethods } from './useStringMethods'

export const useAddressString = (address: EthAddress | undefined) => {
  const [displayName, setDisplayName] = useState('')
  const [isENS, setIsENS] = useState(false)
  const provider = useProvider()

  const lookupENS = useCallback(
    async (address: EthAddress) => {
      return await provider.lookupAddress(address).catch()
    },
    [provider],
  )

  const { addressSubString } = useStringMethods()

  useEffect(() => {
    if (!address) {
      setDisplayName('')
      setIsENS(false)
      return
    }

    ;(async () => {
      const ensname = await lookupENS(address)
      if (ensname) {
        setDisplayName(ensname)
        setIsENS(true)
        return
      }
      setDisplayName(addressSubString(address))
      setIsENS(false)
    })()
  }, [address, addressSubString, lookupENS])

  return { displayName, isENS }
}
