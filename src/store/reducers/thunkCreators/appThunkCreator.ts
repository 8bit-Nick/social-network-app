import { initializedSuccess } from '../appSlice';
import { authMe } from './authThunkCreator';

export const initializeApp = () => async (dispatch: any) => {
  await dispatch(authMe());
  dispatch(initializedSuccess());
};
