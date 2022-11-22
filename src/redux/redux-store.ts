import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './appReducer';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type StoreType = typeof rootReducer;

export type AppRootStateType = ReturnType<typeof rootReducer>;

// const state = store.getState();
export type StateType = ReturnType<StoreType>;
export type DispatchType = typeof store.dispatch;
