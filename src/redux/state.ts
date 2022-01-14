import profileReducer, {addPostActionCreator, changeTextActionCreator} from "./profileReducer";
import dialogsReducer, {addNewMessageActionCreator, changeTextMessageActionCreator} from "./dialogsReducer";

export type PostsType = {
  postsData: Array<{ id: number, post: string, likes: number }>
  textData: string
}
export type DialogsType = {
  contactsData: Array<{ id: number, userName: string }>
  messagesData: Array<{ id: number, message: string }>
  messageText: string
}
export type StateType = {
  profile: PostsType
  dialogs: DialogsType
}
type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  getState: () => StateType
  subscribe: (observer: any) => void
  dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType
  | ChangeTextActionType
  | AddNewMessageActionType
  | ChangeTextMessageActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type ChangeTextActionType = ReturnType<typeof changeTextActionCreator>
export type AddNewMessageActionType = ReturnType<typeof addNewMessageActionCreator>
export type ChangeTextMessageActionType = ReturnType<typeof changeTextMessageActionCreator>

export let store: StoreType = {
  _state: {
    profile: {
      postsData: [
        {id: 1, post: 'This is my first post!', likes: 15},
        {id: 2, post: 'What music do you listen?', likes: 21},
        {id: 3, post: 'Yeah, buddy!', likes: 370},
        {id: 4, post: 'No, thanks.', likes: 3},
      ],
      textData: ''
    },
    dialogs: {
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
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._callSubscriber();
  }
};
