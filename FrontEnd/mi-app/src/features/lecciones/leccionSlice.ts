import { Leccion, LeccionState } from "./type";
import { fetchLeccionesApi, fetchLeccionApiById } from "./api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: LeccionState = {
  lecciones: [],
  leccionID: null,
  loading: false,
  error: null,
};

export const fetchLecciones = createAsyncThunk<Leccion[]>(
  "leccion/fetchLecciones",
  async () => {
    const response = await fetchLeccionesApi();
    return response;
  }
);

export const fetchLeccionById = createAsyncThunk<Leccion, string>(
  "leccion/fetchLeccionById",
  async (id: string) => {
    const response = await fetchLeccionApiById(id);
    console.log("response", response);
    return response;
  }
);

const leccionSlice = createSlice({
  name: "leccion",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Lecciones
      .addCase(fetchLecciones.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLecciones.fulfilled, (state, action) => {
        state.loading = false;
        state.lecciones = action.payload;
      })
      .addCase(fetchLecciones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al obtener las lecciones";
      })

      //Leccion
      .addCase(fetchLeccionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLeccionById.fulfilled, (state, action) => {
        console.log("Datos recibidos de API en Redux:", action.payload);
        state.loading = false;
        state.leccionID = action.payload;
      })

      .addCase(fetchLeccionById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al obtener las lecciones";
      });
  },
});

export const { clearError } = leccionSlice.actions;

export default leccionSlice.reducer;
