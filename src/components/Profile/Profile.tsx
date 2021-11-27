import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import UserInfo from "./UserInfo/UserInfo";

type ProfilePropsType = {
  postsData: Array<{ id: number, post: string, likes: number }>
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={classes.profile}>
      <UserInfo/>
      <MyPosts postsData={props.postsData}/>
    </div>
  );
}

export default Profile;