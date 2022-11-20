import { Sequelize, DataTypes, Model } from "sequelize";
import { Player } from "./types";
import { v4 as uuidv4 } from "uuid";

export function UserModel(sequelize: Sequelize) {
  return sequelize.define<Model<Player>>(
    "Players",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
      // PLAYER provided
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // GENERATED @Signup
      signature: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // UPDATEABLE by route
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      // PLAYER provided
      nickname: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      // ENS Information
      ENSAvatar: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      ENSName: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      ENSDiscord: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      ENSTwitter: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      // REF NETWORKS TABLE
      NetworkId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Networks',
          key: 'id'
        }
      },
    }
  );
}