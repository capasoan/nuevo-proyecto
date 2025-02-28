"use client";

import { AppDispatch } from "@/app/store";
import { fetchLeccionById } from "../../features/lecciones/leccionSlice";
import { RootState } from "../../app/store";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const DetalleLeccion = () => {
  const params = useParams();
  const leccionId = params?.id ? String(params.id) : null;

  console.log("ID recibido de la URL:", leccionId);
  const dispatch = useDispatch<AppDispatch>();
  const leccion = useSelector((state: RootState) => state.leccion.leccionID);

  console.log("leccion", leccion);
  useEffect(() => {
    if (leccionId) {
      console.log("Llamando a fetchLeccionById con ID:", leccionId);
      dispatch(fetchLeccionById(leccionId));
    }
  }, [leccionId, dispatch]);
  // if (loading) return <p>Cargando...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{leccion?.titulo ?? "No se encontró la leccion"}</h2>
      <p>{leccion?.contenido}</p>
    </div>
  );
};

export default DetalleLeccion;
