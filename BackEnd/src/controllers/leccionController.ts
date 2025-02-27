import { request, response } from "express";
import { Leccion } from "../models/Leccion";

import { Request, Response } from "express";

//crear Lecciones
export const crearLecciones = async (
  req = request,
  res = response
): Promise<void> => {
  console.log("Datos recibidos en el body:", req.body);
  const { titulo, contenido, capacitacionId } = req.body;
  try {
    if (!titulo || !contenido || !capacitacionId) {
      res.status(400).json({ error: "Todos los campos son obligatorios" });
      return;
    }

    const nuevaslecciones = await Leccion.create({
      titulo,
      contenido,
      capacitacionId,
    });
    res.status(201).json(nuevaslecciones);
  } catch (error) {
    console.error("Error al crear la lección:", error);
    res.status(500).json({ error: "Error al crear Leccion" });
  }
};

//Obtener Lecciones

export const getLecciones = async (req: Request, res: Response) => {
  try {
    const lecciones = await Leccion.findAll();
    console.log(lecciones);
    res.status(200).json(lecciones);
  } catch (error) {
    res.status(500).json({ error: "Error al traer las lecciones" });
  }
};

//Eliminar lecciones

export const eliminarLecciones = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const eliminarLeccion = await Leccion.findByPk(id);
    if (!eliminarLeccion) {
      res.status(404).json({ error: "Leccion no encontrado" });
      return;
    }
    await eliminarLeccion.destroy();
    res.json({ message: "Leccion eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el leccion" });
  }
};
