import React from "react";
import classes from './Messages.module.css';
import {Message} from "./Message/Message";
import {addNewMessageActionCreator, changeTextMessageActionCreator} from "../../../redux/dialogsReducer";

type MessagesPropsType = {
  messagesData: Array<{ id: number, message: string }>
  messageText: string
  dispatch: (action: any) => void
};
export const Messages: React.FC<MessagesPropsType> = React.memo((props) => {

  let messagesElements = props.messagesData.map((el) => <Message text={el.message} id={el.id}/>);

  const newMessageElement = React.createRef<HTMLTextAreaElement>();

  const sendMessageBtn = () => {
    if (newMessageElement.current) {
      props.dispatch(addNewMessageActionCreator());
      newMessageElement.current.value = '';
    }
  };

  const onChangeHandler = () => {
    if (newMessageElement.current) {
      let text = newMessageElement.current.value;
      props.dispatch(changeTextMessageActionCreator(text));
    }
  };

  return (
    <div className={classes.dialogsMessages}>
      <div className={classes.messagesBlock}>
        {messagesElements}
      </div>
      <textarea ref={newMessageElement}
                placeholder={'Your message...'}
                className={classes.inputPost}
                value={props.messageText}
                onChange={onChangeHandler}
      />
      <button onClick={sendMessageBtn} className={classes.inputButton}>SEND MESSAGE</button>
    </div>
  )
})