import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";

let contactsData = [
  {id: 1, userName: 'Tommy'},
  {id: 2, userName: 'John Wick'},
  {id: 3, userName: 'Izabella'},
  {id: 4, userName: 'Garold'},
  {id: 5, userName: 'Hillary'},
  {id: 6, userName: 'Antoine'},
  {id: 7, userName: 'Ludwig'},
  {id: 8, userName: 'Anna Lee'},
];

let messagesData = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Lets go!'},
  {id: 4, message: 'Nice to meet you.'},
];

let postsData = [
  {id: 1, post: 'This is my first post!', likes: 15},
  {id: 2, post: 'What music do you listen?', likes: 21},
  {id: 3, post: 'Yeah, buddy!', likes: 370},
  {id: 4, post: 'No, thanks.', likes: 3},
];

ReactDOM.render(
  <App contactsData={contactsData}
       messagesData={messagesData}
       postsData={postsData}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
