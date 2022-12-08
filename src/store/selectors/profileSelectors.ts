import { AppRootState } from '../store';

export const getProfile = (state: AppRootState) => {
  return state.profile.userProfile;
};

export const getProfileStatus = (state: AppRootState) => {
  return state.profile.userProfileStatus;
};
