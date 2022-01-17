import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profileReducer";
import {StoreContext} from '../../../StoreContext';

type MyPostsContainerPropsType = {

}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

  return (
    <div>
      <StoreContext.Consumer>
        {
          (store) => {

            let state = store.getState();

            const onSendMessage = () => {
              store.dispatch(addPostActionCreator());
            };

            const onChangeHandler = (text: string) => {
              store.dispatch(changeTextActionCreator(text));
            };

            return(
              <MyPosts postsData={state.profile.postsData}
                       textData={state.profile.textData}
                       addPost={onSendMessage}
                       changeText={onChangeHandler}
              />
            )
          }
        }
      </StoreContext.Consumer>
    </div>
  );
}

export default MyPostsContainer;