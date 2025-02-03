import express, { Request, Response } from "express";
import cors from "cors";
import { sequelize } from "./db";
import { User } from "./models/User";
import { Video } from "./models/Video";
import { Leccion } from "./models/Leccion";
import { Comentario } from "./models/Comentario";
import { Capacitacion } from "./models/Capacitacion";
import routes from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 3000;
console.log("Sequelize en Video.ts:", sequelize);
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor corriendo con TypeScript y Express");
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Modelos sincronizados con la base de datos");
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar modelos:", error);
  });
