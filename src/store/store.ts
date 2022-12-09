import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appSlice from './reducers/appSlice';
import authSlice from './reducers/authSlice';
import dialogsSlice from './reducers/dialogsSlice';
import profileSlice from './reducers/profileSlice';
import usersSlice from './reducers/usersSlice';

const rootReducer = combineReducers({
  profile: profileSlice,
  dialogs: dialogsSlice,
  users: usersSlice,
  auth: authSlice,
  app: appSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
