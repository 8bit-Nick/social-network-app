import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { authType, setAuthUserData } from "../../redux/authReducer";
import { StateType } from "../../redux/redux-store";
import Header from "./Header";

type HeaderContainerTypes = {
	login: string | null;
	isAuth: boolean | undefined;
	setAuthUserData: (data: authType) => void;
};

const HeaderContainer: React.FC<HeaderContainerTypes> = (props) => {
	useEffect(() => {
		authAPI.logIn().then((data: any) => {
			props.setAuthUserData(data.data);
		});
	}, []);

	return <Header isAuth={props.isAuth} login={props.login} />;
};

const mapStateToProps = (state: StateType) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
