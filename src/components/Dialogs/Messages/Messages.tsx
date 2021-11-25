import React from "react";
import classes from './Messages.module.css';
import Message from "./Message/Message";

const Messages = (props: any) => {
  return (
    <div className={classes.dialogsMessages}>
      <Message text={'Message One'}/>
      <Message text={'Message Two'}/>
      <Message text={'Message Three'}/>
    </div>
  )
}

export default Messages;