import { useMemo, useState } from "react";
import { useAccount, useNetwork, useSignMessage } from "wagmi";
import { AES } from 'crypto-js';
import axios from 'axios'

export const useRegisterPlayer = () => {
  const [nickname, setNickname] = useState<string>('');
  const { address } = useAccount();
  const { chain } = useNetwork()
  
  const message = useMemo(() => `Thank you for registering to play de/centralied Rancher, ${nickname}! Please be patience as the game is in development. By signing you are agreeing to all risks involved, like your goerli and time`, [nickname])
  const registerPlayer = async (encryptedSignature: string) => {
    // call api
    const axiosResponse = await axios.post('http://localhost:8080/players/new', {
      address, signature: encryptedSignature, nickname: nickname, chainId: chain!.id
    })
    // @todo toast for error
    // @todo toast for success
    // @todo redirect for success
  }

  const { isLoading, signMessage } = useSignMessage({
    message,
    onError: () => {
      // @todo do something,
    },
    onSuccess: async (data: string) => {
      const encryptedMessage = AES.encrypt(data, process.env.REACT_APP_SECRET_SALT!).toString()
      await registerPlayer(encryptedMessage)
    }
  })

  return { nickname, updateNickName: setNickname, signMessage, isRegisterLoading: isLoading };
}