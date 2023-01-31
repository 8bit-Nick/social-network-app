import { compose } from "redux";

import { withAuthRedirect } from "hoc";
import { Contacts } from "./Contacts";
import { Messages } from "./Messages/Messages";

import classes from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <Contacts />
      <Messages />
    </div>
  );
};

export default compose<React.ComponentType>(withAuthRedirect)(Dialogs);
