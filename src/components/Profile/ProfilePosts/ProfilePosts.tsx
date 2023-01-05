import { useDispatch, useSelector } from "react-redux";

import { addProfilePost } from "../../../redux/reducers/profileSlice";
import { getProfilePosts } from "../../../redux/selectors/profileSelectors";
import { AppDispatch } from "../../../redux/store";
import MyTextarea from "../../common/MyTextarea/MyTextarea";
import Post from "./Post/Post";
import styles from "./ProfilePosts.module.css";

const ProfilePosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profilePosts = useSelector(getProfilePosts);

  const addPost = (message: string) => dispatch(addProfilePost(message));

  const postsElements = profilePosts.map((post) => (
    <Post key={post.id} {...post} />
  ));

  return (
    <div className={styles.container}>
      <MyTextarea submitForm={addPost} />
      <div className={styles.postsElements}>{postsElements}</div>
    </div>
  );
};

export default ProfilePosts;
