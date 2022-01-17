import React from 'react';
import classes from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {

}

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={classes.profile}>
      <UserInfo/>
      <MyPostsContainer/>
    </div>
  );
}

export default Profile;