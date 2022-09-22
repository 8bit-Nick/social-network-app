import Dialogs from "./Dialogs";
import { addNewMessage } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import { DispatchType, StateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type DialogsContainerType = {
	contactsData: Array<{ id: number; userName: string }>;
	messagesData: Array<{ id: number; message: string }>;
	addNewMessage: (newMessage: string) => void;
	isAuth: boolean | undefined;
};

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {
	return (
		<Dialogs
			contactsData={props.contactsData}
			messagesData={props.messagesData}
			addNewMessage={props.addNewMessage}
			isAuth={props.isAuth}
		/>
	);
};

const mapStateToProps = (state: StateType) => {
	return {
		contactsData: state.dialogsPage.contactsData,
		messagesData: state.dialogsPage.messagesData,
		isAuth: state.auth.isAuth,
	};
};

export default compose(
	connect(mapStateToProps, { addNewMessage }),
	withAuthRedirect
)(DialogsContainer);
