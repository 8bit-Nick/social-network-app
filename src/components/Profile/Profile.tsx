import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getUserProfile,
  getUserProfileStatus,
} from '../../store/profileReducer';
import {
  getProfile,
  getProfileStatus,
} from '../../store/selectors/profileSelectors';
import classes from './Profile.module.css';
import MyPostsContainer from './ProfilePosts/MyPostsContainer';
import ProfileUserInfo from './ProfileUserInfo/ProfileUserInfo';

const Profile = () => {
  const profile = useSelector(getProfile);
  const userProfileStatus = useSelector(getProfileStatus);

  const dispatch = useDispatch();

  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserProfile(userId));
    dispatch(getUserProfileStatus(userId));
  }, []);

  return (
    <div className={classes.profile}>
      <ProfileUserInfo
        profile={profile}
        userProfileStatus={userProfileStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
