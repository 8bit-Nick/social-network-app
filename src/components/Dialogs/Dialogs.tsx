import React from "react";
import classes from './Dialogs.module.css';
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";

const Dialogs = () => {

  let contactsData = [
    {id: 1, userName: 'Tommy'},
    {id: 2, userName: 'John Wick'},
    {id: 3, userName: 'Izabella'},
    {id: 4, userName: 'Garold'},
    {id: 5, userName: 'Hillary'},
    {id: 6, userName: 'Antoine'},
    {id: 7, userName: 'Ludwig'},
    {id: 8, userName: 'Anna Lee'},
  ];

  let messagesData = [
    {id: 1, message: 'Hello!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Lets go!'},
    {id: 4, message: 'Nice to meet you.'},
  ];



    return (
        <div className={classes.dialogs}>
            <Contacts contactsData={contactsData}/>
            <Messages messagesData={messagesData}/>
        </div>
    )
}

export default Dialogs;