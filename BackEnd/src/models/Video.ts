import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const Video = sequelize.define(
  "Video",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LeccionId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "Videos",
    freezeTableName: true,
  }
);

export { Video };
