import React from 'react';
import classes from './UserDescription.module.css';

type UserDescriptionPropsType = {
  name: string
  surname: string
  age: number
  country: string
  profession: string
}

const UserDescription = (props: UserDescriptionPropsType) => {
  return (
    <div className={classes.userDescription}>
      <div>
        <div><span className={classes.textStyle}>Name: </span>{props.name}</div>
        <div><span className={classes.textStyle}>Surname: </span>{props.surname}</div>
        <div><span className={classes.textStyle}>Age: </span>{props.age}</div>
        <div><span className={classes.textStyle}>Country: </span>{props.country}</div>
        <div><span className={classes.textStyle}>Profession: </span>{props.profession}</div>
      </div>
    </div>
  );
};

export default UserDescription;
