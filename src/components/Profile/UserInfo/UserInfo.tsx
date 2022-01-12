import React from 'react';
import classes from './UserInfo.module.css';
import Avatar from "./Avatar/Avatar";
import UserDescription from "./UserDescription/UserDescription";

const UserInfo = React.memo(() => {
  return (
    <div className={classes.userInfo}>
      <Avatar/>
      <UserDescription name={'Albert'} surname={'Einstein'} age={142} country={'Kingdom of Württemberg'} profession={'Physicist'}/>
    </div>
  );
})

export default UserInfo;