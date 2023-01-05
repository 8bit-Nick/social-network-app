import { configureStore } from '@reduxjs/toolkit';

import appSlice from './reducers/appSlice';
import authSlice from './reducers/authSlice';
import dialogsSlice from './reducers/dialogsSlice';
import profileSlice from './reducers/profileSlice';
import usersSlice from './reducers/usersSlice';

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    dialogs: dialogsSlice,
    users: usersSlice,
    auth: authSlice,
    app: appSlice,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
