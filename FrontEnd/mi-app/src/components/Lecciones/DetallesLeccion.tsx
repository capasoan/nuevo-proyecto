import { AppDispatch } from "@/app/store";
import { fetchLeccionById } from "../../features/lecciones/leccionSlice";
import { RootState } from "../../app/store";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const DetalleLeccion = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  // console.log("ID", id);

  const { leccionID, loading, error } = useSelector(
    (state: RootState) => state.leccion
  );
  // console.log(
  //   "Estado",
  //   useSelector((state: RootState) => state.leccion)
  // );
  useEffect(() => {
    if (id) {
      dispatch(fetchLeccionById(id));
    }
  }, [dispatch, id]);

  if (loading) return <p>Cargando</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Detalle de la Lección</h1>
      {leccionID && (
        <div>
          <h2>{leccionID.titulo}</h2>
          <p>{leccionID.contenido}</p>
          <p>
            <strong>Capacitación ID:</strong> {leccionID.capacitacionId}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetalleLeccion;
