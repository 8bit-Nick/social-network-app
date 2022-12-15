import { AppRootState } from '../store';

export const getUsers = (state: AppRootState) => state.users.users;

export const getTotalCount = (state: AppRootState) =>
  state.users.totalUsersCount;

export const getCountItems = (state: AppRootState) => state.users.countItems;

export const getSelectPage = (state: AppRootState) => state.users.selectPage;

export const getIsFetching = (state: AppRootState) => state.users.isFetching;

export const getFollowingInProcess = (state: AppRootState) =>
  state.users.followingInProcess;

export const getIsAuth = (state: AppRootState) => state.auth.isAuth;
