import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import InputPost from "./InputPost/InputPost";

const MyPosts = () => {
  return (
    <div className={classes.content}>
      <InputPost/>
      <Post message={'Hello!'} likesCount={15}/>
      <Post message={'How are you?'} likesCount={20}/>
    </div>
  );
}

export default MyPosts;