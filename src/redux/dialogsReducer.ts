import {ActionsTypes, DialogsType} from "./state";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

const initial :DialogsType = {
  contactsData: [
    {id: 1, userName: 'Tommy'},
    {id: 2, userName: 'John Wick'},
    {id: 3, userName: 'Izabella'},
    {id: 4, userName: 'Garold'},
    {id: 5, userName: 'Hillary'},
    {id: 6, userName: 'Antoine'},
    {id: 7, userName: 'Ludwig'},
    {id: 8, userName: 'Anna Lee'},
  ],
  messagesData: [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Lets go!'},
    {id: 4, message: 'Nice to meet you.'},
  ],
  messageText: ''
}

const dialogsReducer = (state = initial, action: ActionsTypes) => {

  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let copyStateMessage = {...state};
      copyStateMessage.messagesData.push({id: 5, message: state.messageText});
      state.messageText = '';
      return state;
    case CHANGE_TEXT_MESSAGE:
      state.messageText = action.newTextMessage;
      return state;
    default:
      return state;
  }
};

export const addNewMessageActionCreator = () => ({type: 'ADD-NEW-MESSAGE'} as const);
export const changeTextMessageActionCreator = (text: string) =>
  ({type: 'CHANGE-TEXT-MESSAGE', newTextMessage: text} as const);

export default dialogsReducer;