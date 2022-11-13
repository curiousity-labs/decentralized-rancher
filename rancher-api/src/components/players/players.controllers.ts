import express from 'express';
import { Model, Sequelize } from 'sequelize';
import { NewPlayerRequestParams, Network } from '../../types';


/**
 * Create new Player
 * @todo should create new entry into database
 * @todo should lookup account ENS information
 * 
 * @param accountAddress address of new player
 * @param signature signed message by new player
 * @param nickname choosen nickname by new player
 * @param chainId network chainId of new player
 * 
 */
export const newPlayer = async (req: express.Request<any, any, NewPlayerRequestParams>, res: express.Response) => {
  const { address, signature, nickname, chainId } = req.body;
  
  const sequelize: Sequelize = req.app.get('sequelize');
  const network: Model<Network> | null = await sequelize.model('Networks').findOne({ where: { chainId } })

  // Error 400 - Unsupported Network
  if(!network) return res.sendStatus(400)

  const player = sequelize.model('Players').build({
    address,
    signature,
    nickname,
    NetworkId: network.get('id')
  })

  await player.save()

  return res.sendStatus(200)
}