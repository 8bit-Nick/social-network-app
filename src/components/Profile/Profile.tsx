import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserProfileStatusTC, getUserProfileTC } from "reduxStore";
import { ProfilePosts } from "./ProfilePosts";
import { ProfileUserInfo } from "./ProfileUserInfo";

import classes from "./Profile.module.css";

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
