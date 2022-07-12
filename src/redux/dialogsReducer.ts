const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const CHANGE_TEXT_MESSAGE = 'CHANGE-TEXT-MESSAGE';

type DialogsType = {
  contactsData: Array<{ id: number, userName: string }>
  messagesData: Array<{ id: number, message: string }>
  messageText: string
}

const initial: DialogsType = {
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
  messageText: '',
};

const dialogsReducer = (state = initial, action: ActionsTypes): DialogsType => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 5, message: state.messageText}],
        messageText: '',
      };
    case CHANGE_TEXT_MESSAGE:
      return {
        ...state,
        messageText: action.newTextMessage,
      };
    default:
      return state;
  }
};

type ActionsTypes = AddNewMessageActionType | ChangeTextMessageActionType
type AddNewMessageActionType = ReturnType<typeof addNewMessageActionCreator>
type ChangeTextMessageActionType = ReturnType<typeof changeTextMessageActionCreator>

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE} as const);
export const changeTextMessageActionCreator = (text: string) =>
  ({type: CHANGE_TEXT_MESSAGE, newTextMessage: text} as const);

export default dialogsReducer;
