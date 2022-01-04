import {stateType, store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const renderEntireTree = (state: stateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store._state}
           addPost={store.addPost.bind(store)}
           changeText={store.changeText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
