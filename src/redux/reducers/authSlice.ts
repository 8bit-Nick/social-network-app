import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { IAuth } from '../../types/auth.interface';

const initialState: IAuth = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUserData(state, action: PayloadAction<IAuth>) {
      const { id, email, login, isAuth } = action.payload;
      state.id = id;
      state.email = email;
      state.login = login;
      state.isAuth = isAuth;
    },
  },
});

export default authSlice.reducer;

export const { setAuthUserData } = authSlice.actions;
