export interface Leccion {
  id: string;
  titulo: string;
  contenido: string;
  capacitacionId: string;
}

export interface LeccionState {
  lecciones: Leccion[];
  leccionID: Leccion | null;
  loading: boolean;
  error: string | null;
}
