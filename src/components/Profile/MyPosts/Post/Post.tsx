import React from 'react';
import classes from './Post.module.css';

type PostPropsType = {
    message: string,
    likesCount: number,
}
const Post = (props: PostPropsType) => {
   return (
       <div className={classes.content}>
           {props.message}
           <div>
               like: {props.likesCount}
           </div>
       </div>
   );
}

export default Post;