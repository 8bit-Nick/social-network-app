import React from "react";
import classes from './Contacts.module.css';
import Contact from "./Contact/Contact";

type ContactsPropsType = {
  contactsData: Array<{ id: number, userName: string }>
}
const Contacts: React.FC<ContactsPropsType> = (props) => {

  let contactsElements = props.contactsData.map((el) => <Contact userName={el.userName} id={el.id}/>)

  return (
    <div className={classes.dialogsNames}>
      {contactsElements}
    </div>
  )
}

export default Contacts;