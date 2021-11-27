import React from "react";
import classes from './Message.module.css';

type MessagePropsType = {
  text: string
  id: number
}

const Message: React.FC<MessagePropsType> = (props) => {
  return (
    <div className={classes.item} key={props.id}>
      {props.text}
    </div>
  )
}

export default Message;