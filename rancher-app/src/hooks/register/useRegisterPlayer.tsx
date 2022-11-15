import { useState } from "react";
import { useSignMessage } from "wagmi";

export const useRegisterPlayer = () => {
  const [nickName, setNickname] = useState<string>('');

  const { isLoading, signMessage } = useSignMessage({
    message: `Thank you for registering to play de/centralied Rancher, ${nickName}! Please be patience as the game is in development. By signing you are agreeing to all risks involved, like your goerli and time`,
    onError: () => {
      // @todo do something,
    },
    onSuccess: async (data: string) => {
      console.log("🚀 ~ file: useRegisterPlayer.tsx ~ line 13 ~ data", data)
      // @todo do something,
    }
  })

  return { nickName, updateNickName: setNickname, signMessage, isRegisterLoading: isLoading };
}