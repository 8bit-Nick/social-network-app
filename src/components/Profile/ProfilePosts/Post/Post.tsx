import React from 'react';
import styles from './Post.module.css';

type PostPropsType = {
  id: number;
  message: string;
  likesCount: number;
  avatar: string;
};

const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img className={styles.avatar__img} src={props.avatar} alt="avatar" />
      </div>
      <div className={styles.message} key={props.id}>
        <div className={styles.message__item}>{props.message}</div>
        <div className={styles.message__like}>
          <span
            className={props.likesCount === 0 ? styles.heartZero : styles.heart}
          >
            ♥
          </span>{' '}
          <span className={styles.likesCount}>{props.likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
