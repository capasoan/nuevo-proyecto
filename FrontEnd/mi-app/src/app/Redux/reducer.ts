import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Capacitacion, CapacitacionState } from "./types";

const initialState: CapacitacionState = {
  capacitaciones: [],
  loading: false,
  error: null,
};

const capacitacionSlice = createSlice({
  name: "capacitacion",
  initialState,
  reducers: {
    fetchCapacitacionesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCapacitacionesSuccess(state, action: PayloadAction<Capacitacion[]>) {
      state.loading = false;
      state.capacitaciones = action.payload;
    },
    fetchCapacitacionesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCapacitacionesRequest,
  fetchCapacitacionesSuccess,
  fetchCapacitacionesFailure,
} = capacitacionSlice.actions;

export default capacitacionSlice.reducer;
