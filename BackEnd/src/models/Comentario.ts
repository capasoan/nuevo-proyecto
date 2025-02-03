import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const Comentario = sequelize.define(
  "Comentario",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    lessonId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "Comentarios",
    freezeTableName: true,
  }
);

export { Comentario };
