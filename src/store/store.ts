import { combineReducers, configureStore } from '@reduxjs/toolkit';

import appReducer from './appReducer';
import authReducer from './authReducer';
import dialogsSlice from './reducers/dialogsSlice';
import profileSlice from './reducers/profileSlice';
import usersSlice from './reducers/usersSlice';

const rootReducer = combineReducers({
  profile: profileSlice, // Redux Toolkit
  dialogs: dialogsSlice, // Redux Toolkit
  users: usersSlice, // Redux Toolkit
  auth: authReducer,
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
