import { useDispatch, useSelector } from "react-redux";

import { MyTextarea } from "components/common";
import { addNewMessage, AppDispatch, AppRootState } from "reduxStore";
import { IMessage } from "types";

import styles from "./Messages.module.css";

export const Messages = () => {
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector(
    (state: AppRootState) => state.dialogs.messagesData
  );

  const addMessage = (message: string) => dispatch(addNewMessage(message));

  const messagesElements = messages.map((message: IMessage) => (
    <div className={styles.messageItem} key={message.id}>
      {message.message}
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.messagesBlock}>{messagesElements}</div>
      <div>
        <MyTextarea submitForm={addMessage} />
      </div>
    </div>
  );
};
