"use client";

import { fetchLecciones } from "@/features/lecciones/leccionSlice";
import { RootState, AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Lecciones = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { lecciones, loading, error } = useSelector(
    (state: RootState) => state.leccion
  );
  useEffect(() => {
    dispatch(fetchLecciones());
  }, [dispatch]);

  if (loading) return <p>Cargando capacitaciones...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Lecciones</h2>
      <ul>
        {lecciones.map((leccion) => (
          <li key={leccion.id}>
            <h3>
              <Link to={`/leccion/${leccion.id}`}>{leccion.titulo}</Link>
            </h3>
            <p>{leccion.contenido}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lecciones;
