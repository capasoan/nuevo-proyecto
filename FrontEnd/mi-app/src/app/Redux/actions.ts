import { AppDispatch } from "../Redux/store";
import {
  fetchCapacitacionesRequest,
  fetchCapacitacionesSuccess,
  fetchCapacitacionesFailure,
} from "./reducer";
import { Capacitacion } from "./types";

export const fetchCapacitaciones = () => async (dispatch: AppDispatch) => {
  dispatch(fetchCapacitacionesRequest());
  try {
    const response = await fetch("http://localhost:3000/api/capacitaciones");
    const data: Capacitacion[] = await response.json();
    dispatch(fetchCapacitacionesSuccess(data));
  } catch (error) {
    dispatch(
      fetchCapacitacionesFailure(
        error instanceof Error ? error.message : "Error desconocido"
      )
    );
  }
};
