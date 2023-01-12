import { useSelector } from "react-redux";

import { AppRootState } from "reduxStore/store";
import { IContact } from "types";
import Contact from "./Contact/Contact";
import classes from "./Contacts.module.css";

export const Contacts = () => {
  const contacts = useSelector(
    (state: AppRootState) => state.dialogs.contactsData
  );

  const contactsElements = contacts.map((contact: IContact) => (
    <Contact key={contact.id} userName={contact.userName} id={contact.id} />
  ));

  return <div className={classes.dialogsNames}>{contactsElements}</div>;
};
