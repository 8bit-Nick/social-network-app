import {ActionsTypes, PostsType} from "./state";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';

let initial: PostsType = {
  postsData: [
    {id: 1, post: 'This is my first post!', likes: 15},
    {id: 2, post: 'What music do you listen?', likes: 21},
    {id: 3, post: 'Yeah, buddy!', likes: 370},
    {id: 4, post: 'No, thanks.', likes: 3},
  ],
  textData: ''
}

const profileReducer = (state = initial, action: ActionsTypes): PostsType => {
  switch (action.type) {
    case ADD_POST:
      let copyState = {...state};
      copyState.postsData.push({id: 5, post: state.textData, likes: 0});
      state.textData = '';
      return state;
    case CHANGE_TEXT:
      state.textData = action.newText;
      return {...state};
    default:
      return state;
  }

};

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const);
export const changeTextActionCreator = (text: string) => ({type: 'CHANGE-TEXT', newText: text} as const);

export default profileReducer;