import { ethers } from "ethers";
import CryptoJS from "crypto-js";

export async function verifySignature(signnature: string, address: string, nickname: string, chainId: string) {
  const msg = `Thank you for registering to play de/centralied Rancher, ${nickname}! Please be patience as the game is in development. By signing you are agreeing to all risks involved, like your goerli and time`
  return address === ethers.utils.verifyMessage(msg, signnature);
}

export function decryptSignature(encryptedSignature: string) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedSignature, process.env.SECRET_SALT!);
  return decryptedBytes.toString(CryptoJS.enc.Utf8);
}