import { Sequelize } from 'sequelize';
import { Network } from '../../types';
export const getNetwork = async (sequelize: Sequelize): Promise<Network | undefined>  => {
  try {

    return;
  } catch (e) {
    console.log(e);
    return undefined;
  }
}