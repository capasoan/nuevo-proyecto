import { Request, Response } from "express";
import { Capacitacion } from "../models/Capacitacion";
import { Leccion } from "../models/Leccion";
import { Video } from "../models/Video";
import { Comentario } from "../models/Comentario";

//crear capacitacion
export const crearCapacitaciones = async (req: Request, res: Response) => {
  const { titulo, descripcion, tipo } = req.body;
  try {
    const nuevasCapacitaciones = await Capacitacion.create({
      titulo,
      descripcion,
      tipo,
    });
    res.status(201).json(nuevasCapacitaciones);
  } catch (error) {
    res.status(500).json({ error: "error al crear capacitaciones" });
  }
};

//Obtener capacitaciones
export const getCapacitaciones = async (req: Request, res: Response) => {
  try {
    const capacitaciones = await Capacitacion.findAll();
    res.json(capacitaciones);
  } catch (error) {
    res.status(500).json({ error: "Error en la solicitud" });
  }
};

//Obtener capacitacion por ID
export const getCapacitacionById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const capacitacion = await Capacitacion.findByPk(id, {
      include: [
        {
          model: Leccion,
          include: [
            {
              model: Video,
            },
            {
              model: Comentario,
            },
          ],
        },
      ],
    });
    console.log("capacitacion", capacitacion);
    if (!capacitacion) {
      res.status(404).json({ error: "capacitacion no encontrads" });
      return;
    }
    res.json(capacitacion);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el capacitacion" });
  }
};

//Eliminar capacitacion

export const eliminarCapacitacion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const eliminarC = await Capacitacion.findByPk(id);
    if (!eliminarC) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    await eliminarC.destroy();
    res.json({ message: "Capacitacion eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el capacitacion" });
  }
};
