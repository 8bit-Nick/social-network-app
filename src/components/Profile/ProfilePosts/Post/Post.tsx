import React from 'react';
import { useSelector } from 'react-redux';
import { getPhotoSmall } from '../../../../store/selectors/profileSelectors';
import { IPost } from '../../../../types/profile.interface';
import Avatar from '../../../common/Avatar/Avatar';
import styles from './Post.module.css';

const Post: React.FC<IPost> = (props) => {
  const photoSmall = useSelector(getPhotoSmall);

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Avatar photo={photoSmall} />
      </div>
      <div className={styles.message} key={props.id}>
        <div className={styles.message__item}>{props.post}</div>
        <div className={styles.message__like}>
          <span className={props.likes === 0 ? styles.heartZero : styles.heart}>
            ♥
          </span>{' '}
          <span className={styles.likesCount}>{props.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
