import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { requiredField } from "../../utils/validators";
import { Input } from "../common/FormControl/FormControl";
import styles from "./Login.module.css";

type formDataType = {
	login: string;
	password: string;
	rememberMe: boolean;
};

const LoginForm: React.FC<InjectedFormProps<formDataType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit} className={styles.form}>
			<div className={styles.login_box}>
				<Field
					className={styles.field}
					placeholder={"Login"}
					name={"login"}
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

export const Login = () => {
	const onSubmit = (formData: formDataType) => {
		console.log(formData);
	};

	return (
		<div className={styles.container}>
			<h2 className={styles.auth}>authorization</h2>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	);
};
