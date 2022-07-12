import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
  id: number
  message: string,
  likesCount: number,
}
const Post: React.FC<PostPropsType> = (props) => {
  return (
    <div className={classes.content} key={props.id}>
      {props.message}
      <div>
        like: {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
