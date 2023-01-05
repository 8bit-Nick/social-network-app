import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { AppRootState } from "../../redux/store";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const authId = useSelector((state: AppRootState) => state.auth.id);

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to={`/profile/${authId}`}
          className={({ isActive }) => {
            return isActive ? classes.active : "";
          }}
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to={"/messages"}
          className={({ isActive }) => {
            return isActive ? classes.active : "";
          }}
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to={"/users"}
          className={({ isActive }) => {
            return isActive ? classes.active : "";
          }}
        >
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to={"/news"}
          className={({ isActive }) => {
            return isActive ? classes.active : "";
          }}
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to={"/music"}
          className={({ isActive }) => {
            return isActive ? classes.active : "";
          }}
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to={"/settings"}
          className={({ isActive }) => {
            return isActive ? classes.active : "";
          }}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
