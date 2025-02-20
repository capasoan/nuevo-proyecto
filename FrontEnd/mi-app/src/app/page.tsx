"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import DetailCapacitaciones from "../components/DetailCapacitaciones";
import Usuarios from "../components/Usuarios";

export default function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capacitacion/:id" element={<DetailCapacitaciones />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </Router>
  );
}
