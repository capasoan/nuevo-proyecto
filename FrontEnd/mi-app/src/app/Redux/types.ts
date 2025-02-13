export interface Capacitacion {
  id: number;
  descripcion: string;
  titulo: string;
  tipo: string;
}

export interface CapacitacionState {
  capacitaciones: Capacitacion[];
  loading: boolean;
  error: string | null;
}
