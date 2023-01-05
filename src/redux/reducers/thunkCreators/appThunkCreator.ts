import { AppDispatch } from "../../store";
import { initializedSuccess } from "../appSlice";
import { authMe } from "./authThunkCreator";

export const initializeApp = () => async (dispatch: AppDispatch) => {
  await dispatch(authMe());
  dispatch(initializedSuccess());
};
