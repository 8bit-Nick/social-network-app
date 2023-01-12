import { authAPI } from "api";
import { setAuthUserData, AppDispatch } from "reduxStore";

export const authMe = () => async (dispatch: AppDispatch) => {
  const data = await authAPI.me();
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setAuthUserData({ id, email, login, isAuth: true }));
  }
};

export const loginUser =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    setStatus: (message: string) => void
  ) =>
    async (dispatch: AppDispatch) => {
      const data = await authAPI.login(email, password, rememberMe);
      if (data.resultCode === 0) {
        dispatch(authMe());
      } else {
        setStatus(data.messages);
      }
    };

export const logoutUser = () => async (dispatch: AppDispatch) => {
  const data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(
      setAuthUserData({ id: null, email: null, login: null, isAuth: false })
    );
  }
};
