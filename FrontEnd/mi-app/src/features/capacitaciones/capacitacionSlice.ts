import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Capacitacion, CapacitacionState } from "./types";
import { fetchCapacitacionesApi, fetchCapacitacionByIdApi } from "./api";

const initialState: CapacitacionState = {
  capacitaciones: [],
  capacitacionID: null,
  loading: false,
  error: null,
};

export const fetchCapacitaciones = createAsyncThunk<Capacitacion[]>(
  "capacitacion/fetchCapacitaciones",
  async () => {
    const response = await fetchCapacitacionesApi();
    return response;
  }
);
export const fetchCapacitacionById = createAsyncThunk<Capacitacion, string>(
  "capacitacion/fetchCapacitacionById",
  async (id: string) => {
    const response = await fetchCapacitacionByIdApi(id);
    return response;
  }
);

const capacitacionSlice = createSlice({
  name: "capacitacion",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Capacitaciones
      .addCase(fetchCapacitaciones.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCapacitaciones.fulfilled, (state, action) => {
        state.loading = false;
        state.capacitaciones = action.payload;
      })
      .addCase(fetchCapacitaciones.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Error al obtener las capacitaciones";
      })
      //Capacitacion por id
      .addCase(fetchCapacitacionById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCapacitacionById.fulfilled, (state, action) => {
        state.loading = false;
        state.capacitacionID = action.payload;
      })
      .addCase(fetchCapacitacionById.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Error al obtener la capacitación";
      });
  },
});

export const { clearError } = capacitacionSlice.actions;
export default capacitacionSlice.reducer;
