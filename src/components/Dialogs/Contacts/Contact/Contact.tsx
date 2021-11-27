import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Contact.module.css';

type ContactPropsType = {
  userName: string
  id: number
}

const Contact: React.FC<ContactPropsType> = (props) => {
  return (
    <div className={classes.name + ' ' + classes.item}>
      <NavLink to={`/messages/${props.id}`}>
        {props.userName}
      </NavLink>
    </div>
  )
}

export default Contact;