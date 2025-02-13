"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/Redux/store";
import { fetchCapacitaciones } from "../app/Redux/actions";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { capacitaciones, loading, error } = useSelector(
    (state: RootState) => state.capacitacion
  );
  console.log("DATA", capacitaciones);
  useEffect(() => {
    dispatch(fetchCapacitaciones());
  }, [dispatch]);

  if (loading) return <p>Cargando capacitaciones...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Capacitaciones</h2>
      <ul>
        {capacitaciones.map((capacitacion) => (
          <li key={capacitacion.id}>
            <h3>{capacitacion.titulo}</h3>
            <p>{capacitacion.descripcion}</p>
            <p>{capacitacion.tipo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
