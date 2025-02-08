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
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    UsuarioId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    LeccionId: {
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
