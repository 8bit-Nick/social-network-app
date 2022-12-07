import { AppRootState } from '../store';

export const getProfile = (state: AppRootState) => {
  return state.profilePage.profile;
};

export const getProfileStatus = (state: AppRootState) => {
  return state.profilePage.userProfileStatus;
};
