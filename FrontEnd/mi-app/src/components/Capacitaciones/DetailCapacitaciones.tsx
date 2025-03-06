"use client";

import { RootState, AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapacitacionById } from "../../features/capacitaciones/capacitacionSlice";
import { useParams } from "react-router-dom";

export const DetailCapacitaciones = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params.id;
  // console.log("ID recibido de la URL:", id);
  const dispatch = useDispatch<AppDispatch>();

  const capacitacionID = useSelector(
    (state: RootState) => state.capacitacion.capacitacionID
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchCapacitacionById(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      <h2>{capacitacionID?.titulo ?? "No se encuentra"}</h2>
      <p>{capacitacionID?.descripcion}</p>
      <p>{capacitacionID?.tipo}</p>
    </div>
  );
};

export default DetailCapacitaciones;
