import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { authAPI } from "../../api/api";
import {
	authThunkCreator,
	authType,
	setAuthUserData,
} from "../../redux/authReducer";
import { StateType } from "../../redux/redux-store";
import Header from "./Header";

type HeaderContainerTypes = {
	login: string | null;
	isAuth: boolean | undefined;
	setAuthUserData: (data: authType) => void;
	authThunkCreator: () => void;
};

const HeaderContainer: React.FC<HeaderContainerTypes> = (props) => {
	useEffect(() => {
		props.authThunkCreator();
	}, []);

	return <Header isAuth={props.isAuth} login={props.login} />;
};

const mapStateToProps = (state: StateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default compose(
	connect(mapStateToProps, { setAuthUserData, authThunkCreator })
)(HeaderContainer);
