import express, { Request, Response } from "express";
import cors from "cors";
import { sincronizarDb } from "./db";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Servidor corriendo con TypeScript y Express");
});

sincronizarDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
});
