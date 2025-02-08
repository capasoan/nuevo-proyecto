import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";

//Crear usuario
export const crearUsuario = async (req: Request, res: Response) => {
  const { nombre, correo, contraseña } = req.body;
  try {
    const nuevoUser = await Usuario.create({ nombre, correo, contraseña });
    res.status(201).json(nuevoUser);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

//Obtener usuarios
export const getUsuario = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

//Obtener usuario por ID
export const getUsuarioById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

//Actualizar usuario
export const descargarUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { nombre, correo, contraseña } = req.body;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    await usuario.update({ nombre, correo, contraseña });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

//Eliminar usuario
export const borrarUsuario = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    await usuario.destroy();
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};
