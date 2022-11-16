import { ethers } from "ethers";
import { AES, enc, MD5 } from "crypto-js";

export async function verifySignature(signature: string, address: string, nickname: string, chainId: string) {
  const encryptedSecret = MD5(process.env.SECRET_SALT!)
  const msg = `Thank you for registering to play de/centralied Rancher, ${nickname}! Please be patience as the game is in development. By signing you are agreeing to all risks involved, like your goerli and time. ${encryptedSecret}`
  return address === ethers.utils.verifyMessage(msg, signature);
}

export function decryptSignature(encryptedSignature: string) {
  const decryptedBytes = AES.decrypt(encryptedSignature, process.env.SECRET_PHRASE!);
  return decryptedBytes.toString(enc.Utf8);
}