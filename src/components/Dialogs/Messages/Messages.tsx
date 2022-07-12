import React from 'react';
import classes from './Messages.module.css';
import {Message} from './Message/Message';

type MessagesPropsType = {
	messagesData: Array<{ id: number; message: string }>;
	messageText: string;
	addMessage: () => void;
	changeTextMessage: (text: string) => void;
};
export const Messages: React.FC<MessagesPropsType> = (props) => {
  const messagesElements = props.messagesData.map((el) => (
    <Message text={el.message} id={el.id} />
  ));

  const newMessageElement = React.createRef<HTMLTextAreaElement>();

  const sendMessageBtn = () => {
    if (newMessageElement.current) {
      props.addMessage();
      newMessageElement.current.value = '';
    }
  };

  const onChangeHandler = () => {
    if (newMessageElement.current) {
      const text = newMessageElement.current.value;
      console.log(text);
      props.changeTextMessage(text);
    }
  };

  return (
    <div className={classes.dialogsMessages}>
      <div className={classes.messagesBlock}>{messagesElements}</div>
      <textarea
        ref={newMessageElement}
        placeholder={'Your message...'}
        className={classes.inputPost}
        value={props.messageText}
        onChange={onChangeHandler}
      />
      <button onClick={sendMessageBtn} className={classes.inputButton}>
				SEND MESSAGE
      </button>
    </div>
  );
};
