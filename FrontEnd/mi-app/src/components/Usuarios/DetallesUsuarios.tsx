"use client";

import { RootState, AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsuarioById } from "@/features/usuarios/usuariosSlice";
import { useParams } from "react-router-dom";

export const DetallesUsuarios = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params.id;
  console.log("ID recibido de la URL:", id);

  const dispatch = useDispatch<AppDispatch>();
  const usuarioID = useSelector((state: RootState) => state.usuario.usuarioID);
  useEffect(() => {
    if (id) {
      dispatch(fetchUsuarioById(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      <h2>{usuarioID?.nombre ?? "No se encontró la capacitación"}</h2>
      <p>{usuarioID?.correo}</p>
      <p>{usuarioID?.id}</p>
    </div>
  );
};

export default DetallesUsuarios;
