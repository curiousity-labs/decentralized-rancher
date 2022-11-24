import express from 'express';
import { Model, Sequelize } from 'sequelize';
import { Web3Provider } from '../../init/Web3Provider';
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
  const playerExist = await playerModal.findOne({ where: { address, NetworkId: network.get('id') } })
  if (!!playerExist) return res.status(200).send({ error: "Player already exists on Network" })

  const player = playerModal.build({
    address,
    signature,
    nickname,
    NetworkId: network.get('id')
  })

  // retrieve address ens information

  const providers: Web3Provider = req.app.get('web3')
  const web3Provider = providers.activeNetworks.get(network.getDataValue('chainId').toString())
  if (!web3Provider) return res.status(500).send({ error: "There was a problem with the connection to the provider, try again later" })

  const ENSName = await web3Provider.lookupAddress(address)
  if (ENSName) {
    const resolver = await web3Provider.getResolver(ENSName);
    if (resolver) {
      const ENSAvatar = await resolver.getText("avatar");
      const ENSEmail = await resolver.getText("email");
      const ENSTwitter = await resolver.getText("com.twitter");
      const ENSDiscord = await resolver.getText("com.discord");
      
      player.setDataValue('ENSAvatar', ENSAvatar)
      player.setDataValue('ENSEmail', ENSEmail)
      player.setDataValue('ENSName', ENSName)
      player.setDataValue('ENSTwitter', ENSTwitter)
      player.setDataValue('ENSDiscord', ENSDiscord)
    }
  }

  await player.save()

  // @todo add a getter method to the Player model to make returning everything but signature.
  return res.status(200).send({ player: { nickname: player.getDataValue('nickname') } })
}