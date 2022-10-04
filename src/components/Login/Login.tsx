import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { withLoginRedirect } from "../../hoc/withLoginRedirect";
import { loginUser } from "../../redux/authReducer";
import { StateType } from "../../redux/redux-store";
import { requiredField } from "../../utils/validators";
import { Input } from "../common/FormControl/FormControl";
import styles from "./Login.module.css";

type formDataType = {
	email: string;
	password: string;
	rememberMe: boolean;
};

type LoginType = {
	loginUser: (email: string, password: string, rememberMe: boolean) => void;
};

const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={styles.form}>
			<div className={styles.login_box}>
				<Field
					className={styles.field}
					placeholder={"Email"}
					name={"email"}
					component={Input}
					validate={[requiredField]}
					type="text"
				/>
			</div>
			<div className={styles.login_box}>
				<Field
					className={styles.field}
					placeholder={"Password"}
					name={"password"}
					component={Input}
					validate={[requiredField]}
					type="password"
				/>
			</div>
			<div className={styles.checkbox}>
				<div className={styles.checkbox__item}>
					<Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
					remember me
				</div>
			</div>
			<div className={styles.container__btn}>
				<button className={styles.btn}>Login</button>
			</div>
		</form>
	);
};

const LoginReduxForm = reduxForm<formDataType>({ form: "login" })(LoginForm);

const Login: React.FC<LoginType> = (props) => {
	const onSubmit = (formData: formDataType) => {
		props.loginUser(formData.email, formData.password, formData.rememberMe);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.auth}>authorization</h2>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};

export default compose<React.ComponentType>(
	connect(null, { loginUser }),
	withLoginRedirect
)(Login);
