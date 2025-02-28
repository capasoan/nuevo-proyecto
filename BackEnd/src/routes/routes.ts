import { Router } from "express";

const router = Router();

//Rutas Videos
import { cargarVideos, getVideos } from "../controllers/videosController";

router.post("/videos/upload", cargarVideos);
router.get("/videos", getVideos);

//Rutas Lecciones
import {
  crearLecciones,
  getLecciones,
  eliminarLecciones,
  getLeccionById,
} from "../controllers/leccionController";

router.post("/crearLecciones", crearLecciones);
router.get("/lecciones", getLecciones);
router.delete("/eliminarLecciones/:id", eliminarLecciones);
router.get("/leccion/:id", getLeccionById);

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
