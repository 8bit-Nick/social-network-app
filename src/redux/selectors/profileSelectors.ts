import { StateType } from '../redux-store';

export const getProfile = (state: StateType) => {
  return state.profilePage.profile;
};

export const getProfileStatus = (state: StateType) => {
  return state.profilePage.userProfileStatus;
};
