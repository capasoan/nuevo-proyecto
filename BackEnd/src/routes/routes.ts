import { Router } from "express";

import {
  crearUsuario,
  getUsuario,
  getUsuarioById,
  descargarUsuario,
  borrarUsuario,
} from "../controllers/usuarioController";

const router = Router();

//Rutas Usuario
router.get("/usuarios", getUsuario);
router.get("/usuario/:id", getUsuarioById);
router.post("/crearUsuario", crearUsuario);
router.put("/u/:id", descargarUsuario);
router.delete("/usuarios/:id", borrarUsuario);

import {
  crearCapacitaciones,
  getCapacitaciones,
} from "../controllers/capacitacionController";

//Rutas Capacitaciones
router.post("/crearCapacitaciones", crearCapacitaciones);
router.get("/capacitaciones", getCapacitaciones);
// router.get("/capacitaciones/:id", getCapacitacionById);

export default router;
