import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const Leccion = sequelize.define(
  "Leccion",
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
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false, // Contenido escrito
    },
    pdfUrl: {
      type: DataTypes.STRING, // Enlace a archivos PDF
      allowNull: true,
    },
    capacitacionId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "Lecciones",
    freezeTableName: true,
  }
);

export { Leccion };
