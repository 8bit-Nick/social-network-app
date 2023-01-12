import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPhotoLarge,
  getProfile,
  getProfileStatus,
  updateUserProfileStatusTC,
} from "reduxStore";
import { Avatar, Preloader } from "components/common";
import { UserDescription } from "./UserDescription";

import classes from "./ProfileUserInfo.module.css";

export const ProfileUserInfo = () => {
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
            {userProfileStatus || "Double click, to write your status"}
          </span>
        )}
      </div>
    </div>
  );
};
