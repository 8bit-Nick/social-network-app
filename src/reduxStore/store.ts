import { configureStore } from "@reduxjs/toolkit";

import {
  appSliceReducer,
  authSliceReducer,
  dialogsSliceReducer,
  profileSliceReducer,
  usersSliceReducer,
} from "reduxStore/reducers";

export const store = configureStore({
  reducer: {
    profile: profileSliceReducer,
    dialogs: dialogsSliceReducer,
    users: usersSliceReducer,
    auth: authSliceReducer,
    app: appSliceReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
