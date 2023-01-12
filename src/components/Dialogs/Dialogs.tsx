import { compose } from "redux";

import { withAuthRedirect } from "hoc";
import { Contacts } from "./Contacts";
import classes from "./Dialogs.module.css";
import { Messages } from "./Messages/Messages";

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <Contacts />
      <Messages />
    </div>
  );
};

export default compose<React.ComponentType>(withAuthRedirect)(Dialogs);
