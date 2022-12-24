import React from 'react';
import { useSelector } from 'react-redux';

import { AppRootState } from '../../../store/store';
import { IContact } from '../../../types/dialogs.interface';
import Contact from './Contact/Contact';
import classes from './Contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(
    (state: AppRootState) => state.dialogs.contactsData
  );

  const contactsElements = contacts.map((contact: IContact) => (
    <Contact key={contact.id} userName={contact.userName} id={contact.id} />
  ));

  return <div className={classes.dialogsNames}>{contactsElements}</div>;
};

export default Contacts;
