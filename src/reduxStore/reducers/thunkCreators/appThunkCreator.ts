import { initializedSuccess, AppDispatch } from "reduxStore";
import { authMe } from "./authThunkCreator";

export const initializeApp = () => async (dispatch: AppDispatch) => {
  await dispatch(authMe());
  dispatch(initializedSuccess());
};
