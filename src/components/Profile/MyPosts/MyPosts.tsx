import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import InputPost from "./InputPost/InputPost";

type MyPostsPropsType = {
  postsData: Array<{ id: number, post: string, likes: number }>
  dispatch: (action: any) => void
  textData: string
}

const MyPosts: React.FC<MyPostsPropsType> = React.memo((props) => {

  let postsElements = props.postsData.map((el) => <Post id={el.id} message={el.post} likesCount={el.likes}/>)

  return (
    <div className={classes.content}>
      <InputPost dispatch={props.dispatch}
                 textData={props.textData}
      />
      {postsElements}
    </div>
  );
})

export default MyPosts;