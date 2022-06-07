import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

export const store = createStore(rootReducer);

export type StoreType = typeof rootReducer;

export type AppRootStateType = ReturnType<typeof rootReducer>

// const state = store.getState();
export type StateType = ReturnType<StoreType>;
export type DispatchType = typeof store.dispatch