import React from "react";
import classes from "./Dialogs.module.css";
import Contacts from "./Contacts/Contacts";
import { Messages } from "./Messages/Messages";
import { Navigate } from "react-router-dom";

type DialogsPropsType = {
	contactsData: Array<{ id: number; userName: string }>;
	messagesData: Array<{ id: number; message: string }>;
	messageText: string;
	addMessage: () => void;
	changeTextMessage: (text: string) => void;
	isAuth: boolean | undefined;
};

const Dialogs: React.FC<DialogsPropsType> = (props) => {
	return (
		<div className={classes.dialogs}>
			<Contacts contactsData={props.contactsData} />
			<Messages
				messagesData={props.messagesData}
				messageText={props.messageText}
				addMessage={props.addMessage}
				changeTextMessage={props.changeTextMessage}
			/>
		</div>
	);
};

export default Dialogs;
