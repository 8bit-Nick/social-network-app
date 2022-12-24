import React from 'react';
import { NavLink } from 'react-router-dom';

import { IContact } from '../../../../types/dialogs.interface';
import userLogo from './../../../../img/userlogo.png';
import classes from './Contact.module.css';

const Contact: React.FC<IContact> = ({ id, userName }) => {
  return (
    <div className={classes.name + ' ' + classes.item}>
      <NavLink to={`/messages/${id}`}>
        <div className={classes.userImg}>
          <img src={userLogo} alt="user-logo" />
        </div>
        <div>{userName}</div>
      </NavLink>
    </div>
  );
};

export default Contact;
