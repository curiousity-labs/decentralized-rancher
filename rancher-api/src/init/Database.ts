import express from "express";
import { Model, ModelStatic, Sequelize } from "sequelize";
import { CreatureModel } from "../models/creatures";
import { CreatureStatusModel } from "../models/creatureStatuses";
import { UserModel } from "../models/players";
import { config } from "../settings";
import { Creature, CreatureStatus, Player } from '../models/types';

const associationOptions = (foreignKey: string) => ({
  sourceKey: "id",
  foreignKey: foreignKey,
  onDelete: "cascade",
});

type DefineAssociationsFunc = (models: {
  playerModel: ModelStatic<Model<Player>>,
  creatureModel: ModelStatic<Model<Creature>>,
  creatureStatusModel: ModelStatic<Model<CreatureStatus>>
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
  const creatureModel = CreatureModel(sequelize)
  const creatureStatusModel = CreatureStatusModel(sequelize)

  defineAssociations({
    playerModel,
    creatureModel,
    creatureStatusModel
  })
  // sync definitions
  await sequelize.sync({ alter: true });
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

          // todo figure out why there is a type error here
          modalsInit(sequelize as any);

          this.app.set("sequelize", sequelize)
          this.app.set("Sequelize", Sequelize)
        })
        .catch(console.error);
    } catch {
      console.info(`connection unsuccessful`);
    }
  };
}
