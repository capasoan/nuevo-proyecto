import { Request, Response } from "express";
import { Video } from "../models/Video";

//Cargar Videos
export const cargarVideos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { url, LeccionId } = req.body;

    if (!url || !LeccionId) {
      res.status(400).json({ error: "URL y LeccionId son requeridos" });
      return;
    }

    const nuevoVideo = await Video.create({ url, LeccionId });

    res
      .status(201)
      .json({ message: "Video registrado correctamente", video: nuevoVideo });
  } catch (error) {
    res.status(500).json({ error: "Error al guardar el video" });
  }
};

//Obtener videos

export const getVideos = async (req: Request, res: Response) => {
  try {
    const traerVideos = await Video.findAll();
    res.json(traerVideos);
  } catch (error) {
    res.status(500).json({ error: "error al obtener los videos" });
  }
};
