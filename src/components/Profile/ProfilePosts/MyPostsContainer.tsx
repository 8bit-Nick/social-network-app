import { connect } from 'react-redux';
import { addProfilePost } from '../../../store/reducers/profileSlice';

import { AppRootState } from '../../../store/store';
import MyPosts from './ProfilePosts';

const mapStateToProps = (state: AppRootState) => {
  return {
    postsData: state.profile.postsProfile,
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
