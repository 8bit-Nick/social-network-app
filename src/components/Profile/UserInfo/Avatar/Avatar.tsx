import React from 'react';
import avatar from "../../../../img/avatar.png";
import classes from './Avatar.module.css';

const Avatar = React.memo(() => {
  return (
    <div>
      <img className={classes.img} src={avatar} alt="avatar"/>
    </div>
  );
})

export default Avatar;