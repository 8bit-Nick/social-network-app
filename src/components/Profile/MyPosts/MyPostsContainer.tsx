import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profileReducer";
import {StoreType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
  // postsData: Array<{ id: number, post: string, likes: number }>
  // dispatch: (action: any) => void
  // textData: string
  store: StoreType
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

  let state = props.store.getState();

  const onSendMessage = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onChangeHandler = (text: string) => {
      props.store.dispatch(changeTextActionCreator(text));
  };

  return (
    <div>
      <MyPosts postsData={state.profile.postsData}
               textData={state.profile.textData}
               addPost={onSendMessage}
               changeText={onChangeHandler}
      />
    </div>
  );
}

export default MyPostsContainer;