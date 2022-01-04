type postsType = {
  postsData: Array<{ id: number, post: string, likes: number }>
  textData: string
}
export type stateType = {
  profile: postsType
  dialogs: {
    contactsData: Array<{ id: number, userName: string }>,
    messagesData: Array<{ id: number, message: string }>
  }
}

export let store = {
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
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  addPost() {
    let copyState = {...this._state};
    copyState.profile.postsData.push({id: 5, post: this._state.profile.textData, likes: 0});
    this._state.profile.textData = '';
    this._callSubscriber();
  },
  changeText(newText: string) {
    this._state.profile.textData = newText;
    this._callSubscriber();
  },
  subscribe(observer: any) {
    this._callSubscriber = observer;
  }
};


