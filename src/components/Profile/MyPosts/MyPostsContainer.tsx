import MyPosts from './MyPosts';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import { DispatchType, StateType } from '../../../redux/redux-store';

const mapStateToProps = (state: StateType) => {
	return {
		postsData: state.profilePage.postsData,
	};
};
const mapDispatchToProps = (dispatch: DispatchType) => {
	return {
		addPost: (newMessage: string) => {
			dispatch(addPostActionCreator(newMessage));
		},
	};
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
