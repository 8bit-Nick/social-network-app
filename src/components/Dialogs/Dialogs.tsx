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

export default Dialogs;
