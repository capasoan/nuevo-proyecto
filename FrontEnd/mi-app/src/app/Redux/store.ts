import { configureStore } from "@reduxjs/toolkit";
import capacitacionReducer from "./reducer";

export const store = configureStore({
  reducer: {
    capacitacion: capacitacionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
