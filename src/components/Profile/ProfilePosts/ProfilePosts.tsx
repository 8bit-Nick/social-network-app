import { useDispatch, useSelector } from "react-redux";

import { addProfilePost, getProfilePosts, AppDispatch } from "reduxStore";
import { MyTextarea } from "components/common";
import { Post } from "./Post";
import { IPost } from "types";

import styles from "./ProfilePosts.module.css";

export const ProfilePosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const profilePosts = useSelector(getProfilePosts);

  const addPost = (message: string) => dispatch(addProfilePost(message));

  const postsElements = profilePosts.map((post: IPost) => (
    <Post key={post.id} {...post} />
  ));

  return (
    <div className={styles.container}>
      <MyTextarea submitForm={addPost} />
      <div className={styles.postsElements}>{postsElements}</div>
    </div>
  );
};
