"use client";
import { useNavigate } from "react-router-dom";
import Lecciones from "./Lecciones/Lecciones";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Bienvenido a la Plataforma de Capacitación</h1>
      <button onClick={() => navigate("/capacitaciones")}>
        Ir a Capacitación Virtual
      </button>
      <div>
        <Lecciones />
      </div>
    </div>
  );
};

export default Home;
