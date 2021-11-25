import React from "react";
import classes from './Dialogs.module.css';
import Contacts from "./Contacts/Contacts";
import Messages from "./Messages/Messages";

const contactsData = [
  {userName: 'Tommy', id: 1},
  {userName: 'John Wick', id: 2},
  {userName: 'Izabella', id: 3},
  {userName: 'Garold', id: 4},
  {userName: 'Hillary', id: 5},
  {userName: 'Antoine', id: 6},
  {userName: 'Ludwig', id: 7},
  {userName: 'Anna Lee', id: 8},
];

const Dialogs = (props: any) => {

    return (
        <div className={classes.dialogs}>
            <Contacts contactsData={contactsData}/>
            <Messages/>
        </div>
    )
}

export default Dialogs;