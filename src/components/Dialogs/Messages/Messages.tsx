import React from "react";
import classes from "./Messages.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControl/FormControl";
import { requiredField } from "../../../utils/validators";

type MessagesPropsType = {
	messagesData: Array<{ id: number; message: string }>;
	addNewMessage: (newMessage: string) => void;
};
export const Messages: React.FC<MessagesPropsType> = (props) => {
	const messagesElements = props.messagesData.map((el) => (
		<div className={classes.item} key={el.id}>
			{el.message}
		</div>
	));

	const newMessage = (value: any) => {
		props.addNewMessage(value.messageBody);
		value.messageBody = "";
	};

	return (
		<div className={classes.dialogsMessages}>
			<div className={classes.messagesBlock}>{messagesElements}</div>
			<ReduxMessageFrom onSubmit={newMessage} />
		</div>
	);
};

const MessageForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				validate={[requiredField]}
				name="messageBody"
				placeholder={"Your message..."}
				className={classes.inputPost}
			/>
			<button className={classes.inputButton}>SEND MESSAGE</button>
		</form>
	);
};

const ReduxMessageFrom = reduxForm({ form: "messageForm" })(MessageForm);
