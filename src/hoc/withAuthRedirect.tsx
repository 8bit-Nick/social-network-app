import { ComponentType } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { StateType } from "../redux/redux-store";

type mstpType = {
	isAuth: boolean | undefined;
};

const mstp = (state: StateType): mstpType => {
	return {
		isAuth: state.auth.isAuth,
	};
};

export function withAuthRedirect(Component: any) {
	const RedirectComponent: React.FC<mstpType> = (props) => {
		let { isAuth, ...restProps } = props;

		if (!isAuth) return <Navigate to="/login" />;
		return <Component {...restProps} />;
	};

	const ConnectedRedirectComponent = connect(mstp)(RedirectComponent);

	return ConnectedRedirectComponent;
}
