import { Request, Response } from "express";
import { User } from "../models/User";

//Crear usuario
export const createUser = async (req: Request, res: Response) => {
  const { nombre, correo, contraseña } = req.body;
  try {
    const newUser = await User.create({ nombre, correo, contraseña });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

//Obtener usuarios
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

//Obtener usuario por ID
export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

//Actualizar usuario
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { nombre, correo, contraseña } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }

    await user.update({ nombre, correo, contraseña });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

//Eliminar usuario
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ error: "Usuario no encontrado" });
      return;
    }
    await user.destroy();
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};
