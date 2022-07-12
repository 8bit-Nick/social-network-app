import Dialogs from './Dialogs';
import {addNewMessageActionCreator, changeTextMessageActionCreator} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {DispatchType, StateType} from '../../redux/redux-store';

const mapStateToProps = (state: StateType) => {
  return {
    contactsData: state.dialogsPage.contactsData,
    messagesData: state.dialogsPage.messagesData,
    messageText: state.dialogsPage.messageText,
  };
};
const mapDispatchToProps = (dispatch: DispatchType) => {
  return {
    addMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
    changeTextMessage: (text: string) => {
      dispatch(changeTextMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
