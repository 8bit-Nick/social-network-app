import { AppRootState } from "../store";

export const getProfile = (state: AppRootState) => state.profile.userProfile;

export const getProfileStatus = (state: AppRootState) =>
  state.profile.userProfileStatus;

// User profile
export const getFullName = (state: AppRootState) =>
  state.profile.userProfile.fullName;

export const getAboutMe = (state: AppRootState) =>
  state.profile.userProfile.aboutMe;

export const getLookingForAJob = (state: AppRootState) =>
  state.profile.userProfile.lookingForAJob;

export const getLookingForAJobDescription = (state: AppRootState) =>
  state.profile.userProfile.lookingForAJobDescription;

export const getContacts = (state: AppRootState) =>
  state.profile.userProfile.contacts;

export const getPhotoLarge = (state: AppRootState) =>
  state.profile.userProfile.photos.large;

export const getPhotoSmall = (state: AppRootState) =>
  state.profile.userProfile.photos.small;

// Profile posts
export const getProfilePosts = (state: AppRootState) =>
  state.profile.postsProfile;
