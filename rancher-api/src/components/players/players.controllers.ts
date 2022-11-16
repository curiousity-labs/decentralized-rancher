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
  const playerModal = sequelize.model('Players')
  const networkModal = sequelize.model('Networks')

  // Error 400 - Unsupported Network
  const network: Model<Network> | null = await networkModal.findOne({ where: { chainId } })
  if (!network) return res.status(400).send({ error: "Unsupported Network" })

  // Error 400 - Player Account Exists on Network
  const playerExist = playerModal.findOne({ where: { address, chainId } })
  if (!playerExist) return res.status(200).send({ error: "Player already exists on Network" })

  const player = playerModal.build({
    address,
    signature,
    nickname,
    NetworkId: network.get('id')
  })

  await player.save()

  return res.sendStatus(200)
}