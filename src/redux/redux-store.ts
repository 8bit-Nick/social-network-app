import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer
});


export const store = createStore(reducers);
export type StoreType = typeof store;

export type AppRootStateType = ReturnType<typeof reducers>