import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { logoutUser, AppRootState } from "reduxStore";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AppRootState) => state.auth.isAuth);
  const login = useSelector((state: AppRootState) => state.auth.login);

  return (
    <header className={classes.header}>
      Social Network
      <div className={classes.login}>
        {isAuth ? (
          <div>
            {login} |{" "}
            <NavLink to="/login" onClick={() => dispatch(logoutUser())}>
              Logout
            </NavLink>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
