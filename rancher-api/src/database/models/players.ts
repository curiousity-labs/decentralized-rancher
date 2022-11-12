import { Sequelize, DataTypes, Model } from "sequelize";
import { Player } from "./types";

export function UserModel(sequelize: Sequelize) {
  return sequelize.define<Model<Player>>(
    "Players",
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      signature: {
        type: DataTypes.STRING,
        allowNull: false
      },
      level: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }
    }
  );
}