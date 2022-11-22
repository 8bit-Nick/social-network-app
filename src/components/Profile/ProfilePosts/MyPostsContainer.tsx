import { connect } from 'react-redux';

import { addProfilePost } from '../../../redux/profileReducer';
import { StateType } from '../../../redux/redux-store';
import MyPosts from './ProfilePosts';

const mapStateToProps = (state: StateType) => {
  return {
    postsData: state.profilePage.postsData,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: (newMessage: string) => {
      dispatch(addProfilePost(newMessage));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
