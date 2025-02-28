export interface Leccion {
  id: number;
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
