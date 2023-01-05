import { useDispatch, useSelector } from "react-redux";

import { addNewMessage } from "../../../redux/reducers/dialogsSlice";
import { AppDispatch, AppRootState } from "../../../redux/store";
import { IMessage } from "../../../types/dialogs.interface";
import MyTextarea from "../../common/MyTextarea/MyTextarea";
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
