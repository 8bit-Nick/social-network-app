import React from "react";
import classes from "./Dialogs.module.css";
import Contacts from "./Contacts/Contacts";
import { Messages } from "./Messages/Messages";

type DialogsPropsType = {
	contactsData: Array<{ id: number; userName: string }>;
	messagesData: Array<{ id: number; message: string }>;
	addNewMessage: (newMessage: string) => void;
	isAuth: boolean | undefined;
};

const Dialogs: React.FC<DialogsPropsType> = (props) => {
	return (
		<div className={classes.dialogs}>
			<Contacts contactsData={props.contactsData} />
			<Messages
				messagesData={props.messagesData}
				addNewMessage={props.addNewMessage}
			/>
		</div>
	);
};

export default Dialogs;
