import { Sequelize, DataTypes, Model } from "sequelize";
import { Creature } from "./types/creature";

export function CreatureModel(sequelize: Sequelize) {
  return sequelize.define<Model<Creature>>(
    "creatures",
    {
      level: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      abilityOne: {
        type: DataTypes.STRING,
        allowNull: true
      },
      abilityTwo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      passive: {
        type: DataTypes.STRING,
        allowNull: true
      },
      learnedSkills: {
        type: DataTypes.STRING,
        allowNull: true
      },
      playerId: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }
  );
}