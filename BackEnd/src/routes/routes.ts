import { Router } from "express";

const router = Router();

//Rutas Lecciones
import { crearLecciones, getLecciones } from "../controllers/leccionController";

router.post("/crearLecciones", crearLecciones);
router.get("/lecciones", getLecciones);

//Rutas Usuario
import {
  crearUsuario,
  getUsuario,
  getUsuarioById,
  descargarUsuario,
  borrarUsuario,
} from "../controllers/usuarioController";

router.get("/usuarios", getUsuario);
router.get("/usuario/:id", getUsuarioById);
router.post("/crearUsuario", crearUsuario);
router.put("/u/:id", descargarUsuario);
router.delete("/usuarios/:id", borrarUsuario);

//Rutas Capacitaciones
import {
  crearCapacitaciones,
  getCapacitaciones,
  getCapacitacionById,
  eliminarCapacitacion,
} from "../controllers/capacitacionController";

router.post("/crearCapacitaciones", crearCapacitaciones);
router.get("/capacitacion/:id", getCapacitacionById);
router.get("/capacitaciones", getCapacitaciones);
router.delete("/borrarCapacitacione/:id", eliminarCapacitacion);

export default router;
