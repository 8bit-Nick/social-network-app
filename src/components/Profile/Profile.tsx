import React from 'react';
import classes from './Profile.module.css';
import UserInfo from "./UserInfo/UserInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../redux/redux-store";

type ProfilePropsType = {
  // postsData: Array<{ id: number, post: string, likes: number }>
  // dispatch: (action: any) => void
  // textData: string
  store: StoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div className={classes.profile}>
      <UserInfo/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}

export default Profile;