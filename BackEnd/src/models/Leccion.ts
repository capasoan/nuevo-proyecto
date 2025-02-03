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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false, // Contenido escrito
    },
    pdfUrl: {
      type: DataTypes.STRING, // Enlace a archivos PDF
      allowNull: true,
    },
    capacitationId: {
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
