import React from "react";
import classes from './Contacts.module.css';
import Contact from "./Contact/Contact";

type ContactsPropsType = {
  contactsData: Array<{userName: string, id: number}>
}
const Contacts = (props: ContactsPropsType) => {
  return (
    <div className={classes.dialogsNames}>
      <Contact userName={props.contactsData[0].userName} id={props.contactsData[0].id}/>
      <Contact userName={props.contactsData[1].userName} id={props.contactsData[1].id}/>
      <Contact userName={props.contactsData[2].userName} id={props.contactsData[2].id}/>
      <Contact userName={props.contactsData[3].userName} id={props.contactsData[3].id}/>
      <Contact userName={props.contactsData[4].userName} id={props.contactsData[4].id}/>
      <Contact userName={props.contactsData[5].userName} id={props.contactsData[5].id}/>
      <Contact userName={props.contactsData[6].userName} id={props.contactsData[6].id}/>
      <Contact userName={props.contactsData[7].userName} id={props.contactsData[7].id}/>
    </div>
  )
}

export default Contacts;