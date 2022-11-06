import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import appReducer from './appReducer';

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
