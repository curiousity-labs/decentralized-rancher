import { NewPlayerRequestParams } from "../../types";
import express from 'express'
import { decryptSignature, verifySignature } from "../../utils";

type RequestWithParams = express.Request<any, any, NewPlayerRequestParams>

function checkParams (params: Partial<NewPlayerRequestParams>) {
  const paramKeys = ['address', 'signature', 'nickname', 'chainId'];
  return paramKeys.filter(key => !Object.keys(params).includes(key))
}

export const validateParams = async (req: RequestWithParams, res: express.Response, next: express.NextFunction) => {
  const { address, signature, nickname, chainId } = req.body;
  const missingParams = checkParams(req.body)
  if(missingParams.length) {
    return res.status(400).send({ error: `[${missingParams.join(', ')}] is required to process request` })
  }

  // @todo decrypt signature and verify valid encryption
  // @todo verify signature with address

  const decryptedSignature = decryptSignature(signature)
  const isSignatureVerified = await verifySignature(decryptedSignature, address, nickname, chainId)
  req.body.signature = decryptedSignature
  if(!isSignatureVerified) return res.status(400).send({ error: "Signature doesn't match" })
  return next();
} 