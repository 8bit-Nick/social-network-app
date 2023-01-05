import React, { FC } from 'react';

import avatar from '../../../img/avatar.png';
import classes from './Avatar.module.css';

interface IAvatar {
  photo: string;
}

const Avatar: FC<IAvatar> = (props) => {
  return (
    <div>
      <img
        className={classes.avatar}
        src={props.photo ? props.photo : avatar}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;