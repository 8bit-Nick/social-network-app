import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { authAPI } from '../../api/api';
import { authMe, logoutUser } from '../../store/authReducer';
import { AppRootState } from '../../store/store';
import Header from './Header';

type HeaderContainerTypes = {
  login: string | null;
  isAuth: boolean | undefined;
  authMe: () => void;
  logoutUser: () => void;
};

const HeaderContainer: React.FC<HeaderContainerTypes> = (props) => {
  // useEffect(() => {
  // 	props.authMe();
  // }, []);

  return (
    <Header
      isAuth={props.isAuth}
      login={props.login}
      logoutUser={props.logoutUser}
    />
  );
};

const mapStateToProps = (state: AppRootState) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(connect(mapStateToProps, { authMe, logoutUser }))(
  HeaderContainer
);
