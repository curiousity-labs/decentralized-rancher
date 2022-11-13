import { NewPlayerRequestParams } from "../../types";
import express from 'express'

export const validateParams = (req: express.Request<any, any, Partial<NewPlayerRequestParams>>, res: express.Response, next: express.NextFunction) => {
  const { address, signature, nickname, chainId } = req.body;

  if(!address) {
    // BAD REQUEST - address not provided
    // @todo check for valid address
    return res.status(400).send({error: 'address is required to process request'})
  }
  if(!signature) {
    // BAD REQUEST - signature not provided
    // @todo verify signature?
    return res.status(400).send({error: 'signature is required to process request'})
  }
  if(!nickname) {
    // BAD REQUEST - nickname not provided
    return res.status(400).send({error: 'nickname is required to process request'})
  }
  if(!chainId) {
    // BAD REQUEST - chainId not provided
    return res.status(400).send({error: 'chainId is required to process request'})
  } 
  next();

} 