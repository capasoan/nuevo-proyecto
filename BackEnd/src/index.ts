import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor corriendo con TypeScript y Express');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
