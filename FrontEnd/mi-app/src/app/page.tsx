"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import DetailCapacitaciones from "../components/Capacitaciones/DetailCapacitaciones";
import DetallesUsuarios from "@/components/Usuarios/DetallesUsuarios";
import Programas from "../components/Capacitaciones/Programas";
import DetallesLeccion from "../components/Lecciones/DetallesLeccion";
import DetalleVideo from "@/components/Videos/DetalleVideo";

export default function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capacitacion/:id" element={<DetailCapacitaciones />} />
        <Route path="/capacitaciones" element={<Programas />} />
        <Route path="/usuario/:id" element={<DetallesUsuarios />} />
        <Route path="/leccion/:id" element={<DetallesLeccion />} />
        <Route path="/video/:id" element={<DetalleVideo />} />
      </Routes>
    </Router>
  );
}
