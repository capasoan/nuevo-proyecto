import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsuarios } from "../features/usuarios/usuariosSlice";
import { RootState, AppDispatch } from "../app/store";
import { Link } from "react-router-dom";

export const Usuarios = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { usuarios, loading, error } = useSelector(
    (state: RootState) => state.usuario
  );
  console.log("Estado Redux:", { usuarios, loading, error });
  console.log("DATA", usuarios);

  useEffect(() => {
    dispatch(fetchUsuarios());
  }, [dispatch]);
  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      if (!usuarios.length && !loading) return{" "}
      <p>No hay usuarios disponibles</p>;{loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <h3>
              <Link to={`/usuario/${usuario.id}`}>{usuario.nombre}</Link>
            </h3>
            <p>{usuario.email}</p>
            <p>{usuario.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
