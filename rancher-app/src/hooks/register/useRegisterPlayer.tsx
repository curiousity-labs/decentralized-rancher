import {  useState } from "react"
import { useAccount, useNetwork, useSignMessage } from "wagmi"
import { AES, MD5 } from "crypto-js"
import axios from "axios"
import { useToast } from "@chakra-ui/react"

export const useRegisterPlayer = () => {
  const [nickname, setNickname] = useState<string>("")
  const { address } = useAccount()
  const { chain } = useNetwork()
  const toast = useToast()

  const SECRET_PHASE = process.env.REACT_APP_SECRET_PHRASE!
  const SECRET_SALT = process.env.REACT_APP_SECRET_SALT!
  const encryptedSecret = MD5(SECRET_SALT)

  const registerPlayer = async (encryptedSignature: string) => {
    try {
      const { data } = await axios.post("http://localhost:8080/players/new", {
        address,
        signature: encryptedSignature,
        nickname: nickname,
        chainId: chain!.id,
      })
      if (data.error) {
        toast({
          description: data.error,
        })
      }
      // @todo toast for error

      if (data.success) {
        toast({
          description: "Success! 🚀",
        })
        // @todo redirect for success
      }
    } catch (e) {
      console.log(e)
    }
  }

  const { isLoading, signMessage } = useSignMessage({
    message: `Thank you for registering to play de/centralied Rancher, ${nickname}! Please be patience as the game is in development. By signing you are agreeing to all risks involved, like your goerli and time. ${encryptedSecret}`,
    onError: () => {
      // @todo do something,
    },
    onSuccess: async (data: string) => {
      const encryptedMessage = AES.encrypt(data, SECRET_PHASE).toString()
      await registerPlayer(encryptedMessage)
    },
  })

  return { nickname, updateNickName: setNickname, signMessage, isRegisterLoading: isLoading }
}
