"use client";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { fetchCapacitaciones } from "../features/capacitaciones/capacitacionSlice";

const Programas = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { capacitaciones, loading, error } = useSelector(
    (state: RootState) => state.capacitacion
  );
  // console.log("DATA", capacitaciones);
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
            <h3>
              <Link to={`/capacitacion/${capacitacion.id}`}>
                {capacitacion.titulo}
              </Link>
            </h3>
            <p>{capacitacion.descripcion}</p>
            <p>{capacitacion.tipo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Programas;
