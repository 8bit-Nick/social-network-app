import React from 'react';
import classes from './Dialogs.module.css';
import Contacts from './Contacts/Contacts';
import {Messages} from './Messages/Messages';

type DialogsPropsType = {
  contactsData: Array<{ id: number, userName: string }>
  messagesData: Array<{ id: number, message: string }>
  messageText: string
  addMessage: () => void
  changeTextMessage: (text: string) => void
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
  return (
    <div className={classes.dialogs}>
      <Contacts contactsData={props.contactsData}/>
      <Messages messagesData={props.messagesData}
        messageText={props.messageText}
        addMessage={props.addMessage}
        changeTextMessage={props.changeTextMessage}
      />
    </div>
  );
};

export default Dialogs;
