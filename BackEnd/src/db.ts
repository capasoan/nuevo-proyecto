import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_NAME || !DB_PORT) {
  throw new Error("Missing required environment variables");
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  port: Number(DB_PORT),
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: console.log,
});

import { Usuario } from "./models/Usuario";
import { Capacitacion } from "./models/Capacitacion";
import { Leccion } from "./models/Leccion";
import { Comentario } from "./models/Comentario";
import { Video } from "./models/Video";

//Relaciones
Capacitacion.hasMany(Leccion, { foreignKey: "capacitacionId" });
Leccion.belongsTo(Capacitacion, { foreignKey: "capacitacionId" });

Leccion.hasOne(Video, { foreignKey: "lessonId" });
Video.belongsTo(Leccion, { foreignKey: "lessonId" });

Leccion.hasMany(Comentario, { foreignKey: "lessonId" });
Comentario.belongsTo(Leccion, { foreignKey: "lessonId" });

Usuario.hasMany(Comentario, { foreignKey: "userId" });
Comentario.belongsTo(Usuario, { foreignKey: "userId" });

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos establecida correctamente.");
  })
  .catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
  });

export { sequelize };
