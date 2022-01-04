import React from "react";
import classes from './Messages.module.css';
import {Message} from "./Message/Message";

type MessagesPropsType = {
  messagesData: Array<{ id: number, message: string }>
};
export const Messages: React.FC<MessagesPropsType> = (props) => {

  let messagesElements = props.messagesData.map((el) => <Message text={el.message} id={el.id}/>)

  return (
    <div className={classes.dialogsMessages}>
      {messagesElements}
    </div>
  )
}