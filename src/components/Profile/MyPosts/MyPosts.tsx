import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import InputPost from "./InputPost/InputPost";

let postsData = [
  {id: 1, post: 'This is my first post!', likes: 15},
  {id: 2, post: 'What music do you listen?', likes: 21},
  {id: 3, post: 'Yeah, buddy!', likes: 370},
  {id: 4, post: 'No, thanks.', likes: 3},
];

let postsElements = postsData.map((el) => <Post id={el.id} message={el.post} likesCount={el.likes}/>)

const MyPosts = () => {
  return (
    <div className={classes.content}>
      <InputPost/>
      {postsElements}
    </div>
  );
}

export default MyPosts;