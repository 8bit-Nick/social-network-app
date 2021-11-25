import React from "react";
import classes from './Message.module.css';

type MessagePropsType = {
  text: string
}

const Message = (props: MessagePropsType) => {
  return (
    <div className={classes.item}>
      {props.text}
    </div>
  )
}

export default Message;