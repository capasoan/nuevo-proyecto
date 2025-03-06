import { Request, Response } from "express";
import { Video } from "../models/Video";

//Cargar Videos
export const cargarVideos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { url, nombre, LeccionId } = req.body;

    if (!url || !nombre || !LeccionId) {
      res.status(400).json({ error: "URL y LeccionId son requeridos" });
      return;
    }

    const nuevoVideo = await Video.create({ url, nombre, LeccionId });

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

//Obtener video por id

export const getVideoById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const videoID = await Video.findByPk(id);
    if (!videoID) {
      res.status(401).json({ message: "Leccion no encontrafda" });
      return;
    }
    res.json(videoID);
  } catch (error) {
    res.status(500).json({ error: "Error al traer la leccion" });
  }
};
