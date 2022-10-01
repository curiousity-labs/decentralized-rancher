import { useRef, useEffect } from "react"
import { PROVIDER_EVENT, WalletProviderEvent } from '@decent-org/wallet-provider';
import { useToast } from "@chakra-ui/toast";

export function useEvents() {
  const isMountedRef = useRef(false)
  const toast = useToast()
  useEffect(() => {
    const providerEvent = (event: CustomEventInit<WalletProviderEvent>) => {
      toast({ description: event.detail!.message })
    }
    if (isMountedRef.current) {
      window.addEventListener(PROVIDER_EVENT, providerEvent)
    }
    isMountedRef.current = true
    return () => {
      window.removeEventListener(PROVIDER_EVENT, providerEvent)
    }
  }, [toast])
}