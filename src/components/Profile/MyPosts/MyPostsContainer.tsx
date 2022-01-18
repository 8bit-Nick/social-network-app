import MyPosts from "./MyPosts";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
  return {
    postsData: state.profile.postsData,
    textData: state.profile.textData
  }
}
const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    changeText: (text: string) => {
      dispatch(changeTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;