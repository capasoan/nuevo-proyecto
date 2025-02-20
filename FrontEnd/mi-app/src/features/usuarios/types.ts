export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: "admin" | "usuario";
  activo: boolean;
}

export interface UsuarioState {
  usuarios: Usuario[];
  usuarioID: Usuario | null;
  loading: boolean;
  error: string | null;
}
