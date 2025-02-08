import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const Capacitacion = sequelize.define(
  "Capacitacion",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM("curso", "diplomado"),
      allowNull: false,
    },
  },
  {
    tableName: "Capacitaciones",
    freezeTableName: true,
  }
);

export { Capacitacion };
