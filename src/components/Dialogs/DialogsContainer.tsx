import React from "react";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {addNewMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogsReducer";

type DialogsContainerPropsType = {
  // contactsData: Array<{ id: number, userName: string }>
  // messagesData: Array<{ id: number, message: string }>
  // messageText: string
  // dispatch: (action: any) => void
  store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

  let state = props.store.getState();

  const sendMessageBtn = () => {
    props.store.dispatch(addNewMessageActionCreator());
  };

  const onChangeHandler = (text: string) => {
    props.store.dispatch(changeTextMessageActionCreator(text));
  };

  return (
    <div>
      <Dialogs contactsData={state.dialogs.contactsData}
               messagesData={state.dialogs.messagesData}
               messageText={state.dialogs.messageText}
               addMessage={sendMessageBtn}
               changeTextMessage={onChangeHandler}
      />
    </div>
  )
}

export default DialogsContainer;