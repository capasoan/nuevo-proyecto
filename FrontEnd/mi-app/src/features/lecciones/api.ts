export const fetchLeccionesApi = async () => {
  const response = await fetch("http://localhost:3000/api/lecciones");
  if (!response.ok) throw new Error("Error al obtener las lecciones");
  return response.json();
};
export const fetchLeccionApiById = async (id: string) => {
  // console.log("ID recibido para API:", id);

  if (!id) throw new Error("ID inválido");

  const response = await fetch(`http://localhost:3000/api/leccion/${id}`);
  const data = await response.json();

  // console.log("Respuesta de la API:", data);

  if (!response.ok) throw new Error("Error al obtener la lección");

  return data;
};
