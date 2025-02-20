import { configureStore } from "@reduxjs/toolkit";
import capacitacionReducer from "../features/capacitaciones/capacitacionSlice";
import usuarioReducer from "../features/usuarios/usuariosSlice";

export const store = configureStore({
  reducer: {
    capacitacion: capacitacionReducer,
    usuario: usuarioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
