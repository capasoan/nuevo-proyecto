import { Request, Response } from "express";
import { Capacitacion } from "../models/Capacitacion";

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
