import express from "express";
import { Model, ModelStatic, Sequelize } from "sequelize";
import { UserModel } from "../database/models/players";
import { config } from "../settings";
import { Creature, Status } from '../database/models/types';
import { NetworkModel } from "../database/models/networks";
import { Network, Player } from "../types";

type DefineAssociationsFunc = (models: {
  playerModel: ModelStatic<Model<Player>>,
  networkModel: ModelStatic<Model<Network>>,
  creatureModel?: ModelStatic<Model<Creature>>,
  creatureStatusModel?: ModelStatic<Model<Status>>
}) => Promise<void>;

const defineAssociations: DefineAssociationsFunc = async ({
  playerModel,
  networkModel,
}) => {

  networkModel.hasOne(playerModel, {})
  playerModel.belongsTo(networkModel, {})


  //  playerModel.hasOne(creatureModel, {
  //   onDelete: "cascade"
  // })

  // creatureModel.belongsTo(playerModel, {
  //   onDelete: "cascade"
  // })

  // creatureModel.hasMany(creatureStatusModel, {
  //   onDelete: "cascade"
  // })

  // creatureStatusModel.belongsTo(creatureModel, {
  //   onDelete: "cascade"
  // })

  // @todo remove these after MVP
  await playerModel.sync({ alter: true })
  await networkModel.sync({ alter: true })
};

export async function modalsInit(sequelize: Sequelize) {

  const playerModel = UserModel(sequelize)
  const networkModel = NetworkModel(sequelize)
  // const creatureModel = CreatureModel(sequelize)
  // const creatureStatusModel = StatusModel(sequelize)

  // initial sync of model definitions
  await sequelize.sync()

  await defineAssociations({
    playerModel,
    networkModel,
  })

  // @todo create migrations
  // @todo create seed data
}

export default class Database {
  constructor(private app: express.Application) {
  }

  asyncConnect = async () => {
    try {
      const { database } = config;
      const { user, password, host, port, name, dialect } = database;
      const sequelize = new Sequelize(name, user, password, {
        host,
        port: Number(port),
        dialect,
        logging: false,
      });
      await sequelize
        .authenticate()
        .then(() => {
          console.info(`[${dialect}] connection successful`);
          console.info(`[${name}] connected`);

          modalsInit(sequelize);

          this.app.set("sequelize", sequelize)
          this.app.set("Sequelize", Sequelize)
        })
        .catch(console.error);
    } catch (e) {
      console.info(`connection unsuccessful`);
    }
  };
}
