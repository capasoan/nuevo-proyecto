import { configureStore } from "@reduxjs/toolkit";
import capacitacionReducer from "../features/capacitaciones/capacitacionSlice";
import usuarioReducer from "../features/usuarios/usuariosSlice";
import leccionReducer from "../features/lecciones/leccionSlice";
import videoReducer from "../features/videos/videoSlice";

export const store = configureStore({
  reducer: {
    capacitacion: capacitacionReducer,
    usuario: usuarioReducer,
    leccion: leccionReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
