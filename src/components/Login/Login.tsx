import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { compose } from 'redux';
import * as yup from 'yup';

import { withLoginRedirect } from '../../hoc/withLoginRedirect';
import { loginUser } from '../../store/reducers/thunkCreators/authThunkCreator';
import { AppDispatch } from '../../store/store';
import styles from './Login.module.css';

interface IValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('please enter a valid email')
      .required('✘ the field is empty'),
    password: yup.string().required('✘ the field is empty!'),
  });

  const customClassName = (
    touched: boolean | undefined,
    errors: string | undefined
  ) => {
    return touched && errors
      ? styles.field + ' ' + styles.errorField
      : styles.field;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.auth}>authorization</h2>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        onSubmit={(values: IValues, onSubmitProps) => {
          dispatch(
            loginUser(
              values.email,
              values.password,
              values.rememberMe,
              onSubmitProps.setStatus
            )
          );
          onSubmitProps.setSubmitting(true);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isSubmitting, status }) => (
          <Form className={styles.form}>
            <div className={styles.login_box}>
              <div>Email:</div>
              <Field
                className={customClassName(touched.email, errors.email)}
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
                className={customClassName(touched.password, errors.password)}
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

export default compose<React.ComponentType>(withLoginRedirect)(Login);
