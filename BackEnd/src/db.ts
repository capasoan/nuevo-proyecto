import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME || !DB_PORT) {
  throw new Error("Missing required environment variables");
}

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  port: Number(DB_PORT),
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

export const sincronizarDb = async () => {
  try {
    // Esto sincroniza todos los modelos, si deseas eliminar tablas existentes durante el desarrollo, usa force: true
    await sequelize.sync({ force: false });
    console.log("M sincronizados");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
};
