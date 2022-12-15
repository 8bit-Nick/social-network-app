import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getUserProfileStatusTC,
  getUserProfileTC,
} from '../../store/reducers/thunkCreators/profileThunkCreator';
import classes from './Profile.module.css';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import ProfileUserInfo from './ProfileUserInfo/ProfileUserInfo';

const Profile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserProfileTC(userId));
    dispatch(getUserProfileStatusTC(userId));
  }, []);

  return (
    <div className={classes.profile}>
      <ProfileUserInfo />
      <ProfilePosts />
    </div>
  );
};

export default Profile;
