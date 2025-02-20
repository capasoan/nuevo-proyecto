export const fetchCapacitacionesApi = async () => {
  const response = await fetch("http://localhost:3000/api/capacitaciones");
  if (!response.ok) throw new Error("Error al obtener las capacitaciones");
  return response.json();
};

export const fetchCapacitacionByIdApi = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/capacitacion/${id}`);
  if (!response.ok) throw new Error("Error al obtener la capacitación");
  return response.json();
};
