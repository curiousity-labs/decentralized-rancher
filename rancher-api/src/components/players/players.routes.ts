import { Express } from "express";

export function Players(app: Express) {
  // check auth
  app.get('')

  // update player level
  app.put('')
  
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
  app.post('')

}