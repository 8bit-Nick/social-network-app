import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';
import Favorite from "./Favorite/Favorite";

type NavbarPropsType = {
  friends: Array<{ id: number, userName: string }>
}

const Navbar: React.FC<NavbarPropsType> = (props) => {

  const friendsArray = props.friends
    .filter((el) => el.id < 4)
    .map((el) => <Favorite user={el.userName} id={el.id}/>);

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to={'/profile'}
                 className={({isActive}) => {
                   return isActive ? classes.active : ''
                 }}
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={'/messages'}
                 className={({isActive}) => {
                   return isActive ? classes.active : ''
                 }}
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={'/news'}
                 className={({isActive}) => {
                   return isActive ? classes.active : ''
                 }}
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={'/music'}
                 className={({isActive}) => {
                   return isActive ? classes.active : ''
                 }}
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to={'/settings'}
                 className={({isActive}) => {
                   return isActive ? classes.active : ''
                 }}
        >
          Settings
        </NavLink>
      </div>
      <div>
        Friends: {friendsArray}
      </div>
    </nav>
  );
}

export default Navbar;