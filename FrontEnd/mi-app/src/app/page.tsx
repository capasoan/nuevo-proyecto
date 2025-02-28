"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import DetailCapacitaciones from "../components/Capacitaciones/DetailCapacitaciones";
import DetallesUsuarios from "@/components/Usuarios/DetallesUsuarios";
import Programas from "../components/Capacitaciones/Programas";
import DetallesLeccion from "../components/Lecciones/DetallesLeccion";

export default function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capacitacion/:id" element={<DetailCapacitaciones />} />
        <Route path="/capacitaciones" element={<Programas />} />
        <Route path="/usuario/:id" element={<DetallesUsuarios />} />
        <Route path="/leccion/:id" element={<DetallesLeccion />} />
      </Routes>
    </Router>
  );
}
