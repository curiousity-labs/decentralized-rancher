import { Application } from 'express';
import * as playerController from './players.controllers'
import { validateParams } from './players.middleware';

export function playerRouter(app: Application) {
  /**
   * Create new player
   */
  app.post('/players/new', validateParams, playerController.newPlayer)

  // check auth
  app.get('/players/:id', (_, res) => res.sendStatus(200))

  // update player level
  app.post('/players/:id', (_, res) => res.sendStatus(200))
  

}