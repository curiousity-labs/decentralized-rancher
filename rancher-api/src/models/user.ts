import { Sequelize, DataTypes } from "sequelize";
import { v4 as uuidv4 } from "uuid";
export function UserModel(sequelize: Sequelize) {
  return sequelize.define<any>(
    "Users",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
    }
  );
}