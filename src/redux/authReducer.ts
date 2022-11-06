import { authAPI } from '../api/api';
import { DispatchType } from './redux-store';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

export type authType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth?: boolean;
};

const initial: authType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (
  state: authType = initial,
  action: ActionsTypes
): authType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type ActionsTypes = setAuthUserDataActionType;

type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: SET_AUTH_USER_DATA,
    payload: { id, email, login, isAuth },
  } as const;
};

// Thunk Creators

export const authMe = () => {
  return (dispatch: DispatchType) => {
    return authAPI.me().then((data: any) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const loginUser = (
  email: string,
  password: string,
  rememberMe: boolean,
  setStatus: any
) => {
  return (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(authMe());
      } else {
        setStatus(data.messages);
      }
    });
  };
};

export const logoutUser = () => {
  return (dispatch: any) => {
    authAPI.logout().then((data: any) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
