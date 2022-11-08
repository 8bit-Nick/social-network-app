import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateUserProfileStatus } from '../../../redux/profileReducer';
import { userProfile } from '../../../types/profileTypes';
import Preloader from '../../common/Preloader/Preloader';
import Avatar from './Avatar/Avatar';
import classes from './ProfileUserInfo.module.css';
import UserDescription from './UserDescription/UserDescription';

interface IUserInfo {
  profile: userProfile;
  userProfileStatus: string;
}

const UserInfo: FC<IUserInfo> = (props) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [inputStatus, setInputStatus] = useState(props.userProfileStatus);

  useEffect(() => {
    setInputStatus(props.userProfileStatus);
  }, [props.userProfileStatus]);

  const editModeON = () => {
    setEditMode(true);
  };

  const editModeOFF = () => {
    setEditMode(false);
    dispatch(updateUserProfileStatus(inputStatus));
  };

  const changeInputStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStatus(e.currentTarget.value);
  };

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.userInfo}>
        <Avatar />
        <UserDescription
          name={props.profile.fullName}
          surname={'Einstein'}
          age={142}
          country={'Kingdom of Württemberg'}
          profession={'Physicist'}
        />
      </div>
      <div>
        {editMode ? (
          <input
            value={inputStatus}
            onChange={changeInputStatus}
            autoFocus
            onBlur={editModeOFF}
          />
        ) : (
          <span onDoubleClick={editModeON}>
            {props.userProfileStatus || 'Double click, to write your status'}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
