import {combineReducers, createStore} from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let reducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer
})

export let store = createStore(reducer);