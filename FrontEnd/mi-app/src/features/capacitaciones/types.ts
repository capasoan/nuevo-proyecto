export interface Capacitacion {
  id: number;
  descripcion: string;
  titulo: string;
  tipo: string;
}

export interface CapacitacionState {
  capacitaciones: Capacitacion[];
  capacitacionID: Capacitacion | null;
  loading: boolean;
  error: string | null;
}
