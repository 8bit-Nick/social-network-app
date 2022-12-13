import React from 'react';

import avatar from '../../../img/avatar.png';
import MyTextarea from '../../common/MyTextarea/MyTextarea';
import styles from './ProfilePosts.module.css';
import Post from './Post/Post';

type MyPostsPropsType = {
  postsData: Array<{ id: number; post: string; likes: number }>;
  addPost: (newMessage: string) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
  const postsElements = props.postsData.map((el) => (
    <Post
      key={el.id}
      id={el.id}
      message={el.post}
      likesCount={el.likes}
      avatar={avatar}
    />
  ));

  return (
    <div className={styles.container}>
      <MyTextarea submitForm={props.addPost} />
      <div className={styles.postsElements}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
