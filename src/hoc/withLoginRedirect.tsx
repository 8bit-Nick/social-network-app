import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppRootState } from "../redux/store";

type mstpType = {
  id: number | null;
};

const mstp = (state: AppRootState): mstpType => {
  return {
    id: state.auth.id,
  };
};

export function withLoginRedirect<T extends object>(
  Component: React.ComponentType<T>
) {
  const RedirectComponent: React.FC<mstpType> = (props) => {
    let { id, ...restProps } = props;

    if (id) return <Navigate to={`/profile/${id}`} />;
    return <Component {...(restProps as T)} />;
  };

  return connect(mstp)(RedirectComponent);
}
