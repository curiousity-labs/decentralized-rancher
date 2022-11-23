import { EthAddress } from "../../types/common"

export const useStringMethods = () => {
  const addressSubString = (address: EthAddress) => {
    return `${address.substring(0, 5)}...${address.slice(-6)}`;
  }
  return { addressSubString }
}