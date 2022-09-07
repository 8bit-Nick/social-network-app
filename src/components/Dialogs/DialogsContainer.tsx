import Dialogs from "./Dialogs";
import {
	addNewMessageActionCreator,
	changeTextMessageActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { DispatchType, StateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state: StateType) => {
	return {
		contactsData: state.dialogsPage.contactsData,
		messagesData: state.dialogsPage.messagesData,
		messageText: state.dialogsPage.messageText,
		isAuth: state.auth.isAuth,
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

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs);
