import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  followThunkCreator,
  unfollowThunkCreator,
} from '../../../../redux/usersReducer';
import { getFollowingInProcess } from '../../../../redux/selectors/usersSelectors';
import classes from './User.module.css';

type UsersPropsType = {
  fullName: string;
  photoUrl: any;
  userStatus: string;
  userId: number;
  followed: boolean;
};

const User: React.FC<UsersPropsType> = (props) => {
  const dispatch = useDispatch();
  const followingInProcess = useSelector(getFollowingInProcess);

  return (
    <div className={classes.user}>
      <div className={classes.userPhoto}>
        <div>
          <NavLink to={'/profile/' + props.userId}>
            <img
              src={props.photoUrl}
              className={classes.img}
              alt={'photoUrl'}
            />
          </NavLink>
        </div>
        <div>{props.fullName}</div>
      </div>

      <div className={classes.userInfo}>
        <div>
          {/* My country: {props.userLocation.country}, My city:{" "}
					{props.userLocation.city} */}
        </div>
        <div>{props.userStatus}</div>
      </div>

      <div className={classes.userBtn}>
        {props.followed ? (
          <button
            disabled={followingInProcess.some((id) => id === props.userId)}
            onClick={() => {
              dispatch(unfollowThunkCreator(props.userId));
            }}
          >
            UNFOLLOWED
          </button>
        ) : (
          <button
            disabled={followingInProcess.some((id) => id === props.userId)}
            onClick={() => {
              dispatch(followThunkCreator(props.userId));
            }}
          >
            FOLLOWED
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
