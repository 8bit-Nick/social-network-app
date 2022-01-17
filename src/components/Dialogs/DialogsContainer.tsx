import React from "react";
import Dialogs from "./Dialogs";
import {addNewMessageActionCreator, changeTextMessageActionCreator} from "../../redux/dialogsReducer";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {

}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

  return (
    <div>
      <StoreContext.Consumer>
        {
          (store) => {

            let state = store.getState();

            const sendMessageBtn = () => {
              store.dispatch(addNewMessageActionCreator());
            };

            const onChangeHandler = (text: string) => {
              store.dispatch(changeTextMessageActionCreator(text));
            };

            return (
              <Dialogs contactsData={state.dialogs.contactsData}
                       messagesData={state.dialogs.messagesData}
                       messageText={state.dialogs.messageText}
                       addMessage={sendMessageBtn}
                       changeTextMessage={onChangeHandler}
              />
            )
          }
        }
      </StoreContext.Consumer>
    </div>
  )
}

export default DialogsContainer;