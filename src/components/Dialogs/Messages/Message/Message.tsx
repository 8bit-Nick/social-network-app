import React from "react";
import classes from './Message.module.css';

type MessagePropsType = {
  text: string
  id: number
}

export const Message: React.FC<MessagePropsType> = React.memo((props) => {
  return (
    <div className={classes.item} key={props.id}>
      {props.text}
    </div>
  )
})
