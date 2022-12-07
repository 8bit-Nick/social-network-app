import { AppRootState } from '../store';

export const getUsers = (state: AppRootState) => {
  return state.users.users;
};

export const getTotalCount = (state: AppRootState) => {
  return state.users.totalUsersCount;
};

export const getCountItems = (state: AppRootState) => {
  return state.users.countItems;
};

export const getSelectPage = (state: AppRootState) => {
  return state.users.selectPage;
};

export const getIsFetching = (state: AppRootState) => {
  return state.users.isFetching;
};

export const getFollowingInProcess = (state: AppRootState) => {
  return state.users.followingInProcess;
};

export const getIsAuth = (state: AppRootState) => {
  return state.auth.isAuth;
};
