import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUserProfileStatusTC } from '../../../store/reducers/thunkCreators/profileThunkCreator';
import {
  getPhotoLarge,
  getProfile,
  getProfileStatus,
} from '../../../store/selectors/profileSelectors';
import Avatar from '../../common/Avatar/Avatar';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileUserInfo.module.css';
import UserDescription from './UserDescription/UserDescription';

const UserInfo = () => {
  const dispatch = useDispatch();
  const photoLarge = useSelector(getPhotoLarge);
  const profile = useSelector(getProfile);
  const userProfileStatus = useSelector(getProfileStatus);

  const [editMode, setEditMode] = useState(false);
  const [inputStatus, setInputStatus] = useState(userProfileStatus);

  useEffect(() => {
    setInputStatus(userProfileStatus);
  }, [userProfileStatus]);

  const editModeON = () => {
    setEditMode(true);
  };

  const editModeOFF = () => {
    setEditMode(false);
    dispatch(updateUserProfileStatusTC(inputStatus));
  };

  const changeInputStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStatus(e.currentTarget.value);
  };

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={classes.userInfo}>
        <Avatar photo={photoLarge} />
        <UserDescription />
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
            {userProfileStatus || 'Double click, to write your status'}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
