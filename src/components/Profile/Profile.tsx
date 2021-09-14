import React from 'react';
import avatar from "../../img/avatar.png";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
   return (
       <div>
           <img className={classes.img} src={avatar} alt="avatar"/>
           <MyPosts/>
       </div>
   );
}

export default Profile;