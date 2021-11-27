import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import InputPost from "./InputPost/InputPost";

type MyPostsPropsType = {
  postsData: Array<{ id: number, post: string, likes: number }>
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {

  let postsElements = props.postsData.map((el) => <Post id={el.id} message={el.post} likesCount={el.likes}/>)

  return (
    <div className={classes.content}>
      <InputPost/>
      {postsElements}
    </div>
  );
}

export default MyPosts;