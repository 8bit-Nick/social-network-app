// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { requiredField } from "../../../../utils/validators";
// import { Textarea } from "../../../common/FormControl/FormControl";
// import classes from "./InputPost.module.css";

// type InputPropsType = {
// 	addPost: (newMessage: string) => void;
// };

// const InputPost: React.FC<InputPropsType> = (props) => {
// 	const addNewMessage = (messageData: any) => {
// 		props.addPost(messageData.newMessageBody);
// 		messageData.newMessageBody = "";
// 	};

// 	return (
// 		<div>
// 			<ReduxMessageForm onSubmit={addNewMessage} />
// 		</div>
// 	);
// };

// const AddMessageForm = (props: any) => {
// 	return (
// 		<form onSubmit={props.handleSubmit}>
// 			<Field
// 				component={Textarea}
// 				validate={[requiredField]}
// 				name="newMessageBody"
// 				placeholder="Type your message..."
// 				className={classes.inputPost}
// 			/>
// 			<div>
// 				<button className={classes.inputButton}>SEND MESSAGE</button>
// 			</div>
// 		</form>
// 	);
// };

// const ReduxMessageForm = reduxForm({ form: "addMessageForm" })(AddMessageForm);

// export default InputPost;

import { Field, Form, Formik } from 'formik';
import React from 'react';
import classes from './InputPost.module.css';
import * as yup from 'yup';

type InputPropsType = {
	addPost: (newMessage: string) => void;
};

const validationSchema = yup.object().shape({
	messageBody: yup.string().required('✘ the field is empty'),
});

const InputPost: React.FC<InputPropsType> = (props) => {
	return (
		<div>
			<h1>Anywhere in your app!</h1>
			<Formik
				initialValues={{ messageBody: '' }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						props.addPost(values.messageBody);
						values.messageBody = '';
						setSubmitting(true);
					}, 400);
				}}
				validationSchema={validationSchema}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<Form>
						<div>
							<Field type="text" name="messageBody" onBlur={false} />
							{errors.messageBody}
						</div>
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default InputPost;
