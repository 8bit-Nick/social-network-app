import { authMe } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type authType = {
  initialized: boolean;
};

const initial: authType = {
  initialized: false,
};

const appReducer = (state: authType = initial, action: any): authType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// Thunk Creators
export const initializeApp = () => async (dispatch: any) => {
  await dispatch(authMe());
  dispatch(initializedSuccess());
};

export default appReducer;
