import express from "express";
import { Sequelize } from "sequelize";
import { UserModel } from "../models/user";
import { config } from "../settings";

const associationOptions = (foreignKey: string) => ({
  sourceKey: "id",
  foreignKey: foreignKey,
  onDelete: "cascade",
});

export const defineAssociations = (sequelize: Sequelize) => {
  const { User } = sequelize.models;
};

export const syncModels = async (sequelize: Sequelize) => {
  for (const Model in sequelize.models) {
    await sequelize.models[Model].sync({ alter: true });
  }
};

export async function modalsInit(sequelize: Sequelize) {
  // define models
  UserModel(sequelize)
  // sync definitions
  await syncModels(sequelize);

  // define associations
  defineAssociations(sequelize);

  // sync associations
  await syncModels(sequelize);
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
