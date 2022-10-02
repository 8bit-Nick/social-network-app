import styles from "./FormControl.module.css";

export const Textarea = ({ input, meta, className, ...props }: any) => {
	const error = meta.error && meta.submitFailed;

	return (
		<div>
			<div>
				{error && <span className={styles.textError}>{meta.error}</span>}
			</div>
			<textarea
				className={error ? className + " " + styles.textareaError : className}
				{...input}
				{...props}
			/>
		</div>
	);
};

export const Input = ({ input, meta, className, ...props }: any) => {
	const error = meta.error && meta.submitFailed;

	return (
		<div>
			<input
				className={error ? className + " " + styles.textareaError : className}
				{...input}
				{...props}
			/>
			<div>
				{error && <span className={styles.textError}>{"✘ " + meta.error}</span>}
			</div>
		</div>
	);
};
