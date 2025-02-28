export const fetchUsuariosApi = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/usuarios");
    if (!response.ok) {
      throw new Error("Error al obtener a los usuarios");
    }
    const data = await response.json();
    // console.log("Datos de la API:", data);
    return data;
  } catch (error) {
    console.error("Error en fetchUsuariosApi:", error);
    throw error;
  }
};

export const fetchUsuarioByIdApi = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/usuario/${id}`);
  if (!response.ok) throw new Error("Error al obtener la capacitación");
  return response.json();
};
