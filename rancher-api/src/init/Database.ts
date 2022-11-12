import express from "express";
import { Model, ModelStatic, Sequelize } from "sequelize";
import { CreatureModel } from "../database/models/creatures";
import { StatusModel } from "../database/models/status";
import { UserModel } from "../database/models/players";
import { config } from "../settings";
import { Creature, Status, Player } from '../database/models/types';

type DefineAssociationsFunc = (models: {
  playerModel: ModelStatic<Model<Player>>,
  creatureModel: ModelStatic<Model<Creature>>,
  creatureStatusModel: ModelStatic<Model<Status>>
}) => void;

const defineAssociations: DefineAssociationsFunc = ({
  playerModel,
  creatureModel,
  creatureStatusModel
}) => {
  playerModel.hasOne(creatureModel, {
    onDelete: "cascade"
  })

  creatureModel.belongsTo(playerModel, {
    onDelete: "cascade"
  })

  creatureModel.hasMany(creatureStatusModel, {
    onDelete: "cascade"
  })

  creatureStatusModel.belongsTo(creatureModel, {
    onDelete: "cascade"
  })

};

export async function modalsInit(sequelize: Sequelize) {

  const playerModel = UserModel(sequelize)
  // const creatureModel = CreatureModel(sequelize)
  // const creatureStatusModel = StatusModel(sequelize)

  // defineAssociations({
  //   playerModel,
  //   creatureModel,
  //   creatureStatusModel
  // })

  // This creates the table if it doesn't exist (and does nothing if it already exists)
  sequelize.sync()

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
        logging: (...msg) => console.log(msg),
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
    } catch {
      console.info(`connection unsuccessful`);
    }
  };
}
