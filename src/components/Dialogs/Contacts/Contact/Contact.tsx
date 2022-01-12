import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Contact.module.css';
import userLogo from './../../../../img/userlogo.png'

type ContactPropsType = {
  userName: string
  id: number
}

const Contact: React.FC<ContactPropsType> = React.memo((props) => {
  return (
    <div className={classes.name + ' ' + classes.item}>
      <NavLink to={`/messages/${props.id}`}>
        <div className={classes.userImg}>
          <img src={userLogo} alt="user-logo"/>
        </div>
        <div>
          {props.userName}
        </div>
      </NavLink>
    </div>
  )
})

export default Contact;