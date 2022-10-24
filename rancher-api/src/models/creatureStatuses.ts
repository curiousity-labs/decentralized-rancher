import { Sequelize, DataTypes, Model } from "sequelize";
import { CreatureStatus } from "./types";
import { v4 as uuidv4 } from "uuid";

export function CreatureStatusModel(sequelize: Sequelize) {
  return sequelize.define<Model<CreatureStatus>>(
    "CreatureStatuses",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
      level: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      health: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      strength: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      defense: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      specialAttack: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      specialDefense: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );
}