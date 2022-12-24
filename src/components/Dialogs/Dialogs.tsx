import React from 'react';
import { compose } from 'redux';

import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Contacts from './Contacts/Contacts';
import classes from './Dialogs.module.css';
import { Messages } from './Messages/Messages';

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <Contacts />
      <Messages />
    </div>
  );
};

export default compose<React.ComponentType>(withAuthRedirect)(Dialogs);
