import React from "react";
import { Field, reduxForm } from "redux-form";
import { requiredField } from "../../../../utils/validators";
import { Textarea } from "../../../common/FormControl/FormControl";
import classes from "./InputPost.module.css";

type InputPropsType = {
	addPost: (newMessage: string) => void;
};

const InputPost: React.FC<InputPropsType> = (props) => {
	const addNewMessage = (messageData: any) => {
		props.addPost(messageData.newMessageBody);
		messageData.newMessageBody = "";
	};

	return (
		<div>
			<ReduxMessageForm onSubmit={addNewMessage} />
		</div>
	);
};

const AddMessageForm = (props: any) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field
				component={Textarea}
				validate={[requiredField]}
				name="newMessageBody"
				placeholder="Type your message..."
				className={classes.inputPost}
			/>
			<div>
				<button className={classes.inputButton}>SEND MESSAGE</button>
			</div>
		</form>
	);
};

const ReduxMessageForm = reduxForm({ form: "addMessageForm" })(AddMessageForm);

export default InputPost;
