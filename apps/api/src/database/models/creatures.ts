import { Sequelize, DataTypes, Model } from "sequelize";
import { Creature } from "./types/creature";
import { v4 as uuidv4 } from "uuid";
export function CreatureModel(sequelize: Sequelize) {
  return sequelize.define<Model<Creature>>(
    "creature",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
      level: {
        type: DataTypes.STRING,
        allowNull: false,
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