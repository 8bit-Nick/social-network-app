import { useSelector } from "react-redux";

import { getPhotoSmall } from "reduxStore/selectors";
import { Avatar } from "components/common";
import { IPost } from "types";

import styles from "./Post.module.css";

export const Post: React.FC<IPost> = (props) => {
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
          </span>{" "}
          <span className={styles.likesCount}>{props.likes}</span>
        </div>
      </div>
    </div>
  );
};
