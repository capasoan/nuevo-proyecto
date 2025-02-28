import { Usuario, UsuarioState } from "../usuarios/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsuariosApi, fetchUsuarioByIdApi } from "./api";

const initialState: UsuarioState = {
  usuarios: [],
  usuarioID: null,
  loading: false,
  error: null,
};

export const fetchUsuarios = createAsyncThunk<Usuario[]>(
  "usuarios/fetchUsuarios",
  async () => {
    const response = await fetchUsuariosApi();
    return response;
  }
);
export const fetchUsuarioById = createAsyncThunk<Usuario, string>(
  "usuario/fetchUsuarioById",
  async (id: string) => {
    const response = await fetchUsuarioByIdApi(id);
    return response;
  }
);

const usuarioSlice = createSlice({
  name: "usuario",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //usuarios
      .addCase(fetchUsuarios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsuarios.fulfilled, (state, action) => {
        // console.log("Usuarios recibidos:", action.payload);
        state.loading = false;
        state.usuarios = action.payload;
      })
      .addCase(fetchUsuarios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "Error al obtener los usuarios";
      })
      //usuarioId
      .addCase(fetchUsuarioById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsuarioById.fulfilled, (state, action) => {
        state.loading = false;
        state.usuarioID = action.payload;
      })
      .addCase(fetchUsuarioById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "error al obetener el usuario";
      });
  },
});

export const { clearError } = usuarioSlice.actions;
export default usuarioSlice.reducer;
