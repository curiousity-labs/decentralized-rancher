import { Sequelize, DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import { Network } from "./types/network";

export function NetworkModel(sequelize: Sequelize) {
  return sequelize.define<Model<Network>>(
    "Network",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
      networkName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chainId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      isTestNetwork: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      rpcURL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      networkColor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blockExplorerURL: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      timestamps: false
    }
  )
}
