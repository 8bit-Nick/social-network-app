import MyPosts from "./MyPosts";
import {addPostActionCreator, changeTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
  return {
    postsData: state.profilePage.postsData,
    textData: state.profilePage.textData
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