import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as yup from 'yup';
import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { loginUser } from '../../store/authReducer';
import styles from './Login.module.css';

interface validateError {
  email?: string;
  password?: string;
}

interface loginValidation {
  email: string | undefined;
  password: string | undefined;
}

const Login = (props: any) => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('please enter a valid email')
      .required('✘ the field is empty'),
    password: yup.string().required('✘ the field is empty!'),
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.auth}>authorization</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values: any, onSubmitProps) => {
          setTimeout(() => {
            props.loginUser(
              values.email,
              values.password,
              values.rememberMe,
              onSubmitProps.setStatus,
              onSubmitProps.setSubmitting
            );
            onSubmitProps.setSubmitting(true);
          }, 400);
        }}
        validationSchema={validationSchema}
      >
        {({
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          status,
        }) => (
          <Form className={styles.form}>
            <div className={styles.login_box}>
              <div>Email:</div>
              <Field
                className={
                  touched.email && errors.email
                    ? styles.field + ' ' + styles.errorField
                    : styles.field
                }
                type="email"
                name="email"
              />
              <div className={styles.error}>
                {touched.email && errors.email}
              </div>
            </div>
            <div className={styles.login_box}>
              <div>Password:</div>
              <Field
                className={
                  touched.password && errors.password
                    ? styles.field + ' ' + styles.errorField
                    : styles.field
                }
                type="password"
                name="password"
              />
              <div className={styles.error}>
                {touched.password && errors.password}
                {status}
              </div>
            </div>
            <div className={styles.checkbox}>
              <div className={styles.checkbox__item}>
                <Field type="checkbox" name="rememberMe" />
                Remember me
              </div>
            </div>
            <div className={styles.container__btn}>
              <button
                className={styles.btn}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default compose<React.ComponentType>(
  connect(null, { loginUser }),
  withLoginRedirect
)(Login);
