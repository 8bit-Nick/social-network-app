import { StateType } from '../redux-store';

export const getUsers = (state: StateType) => {
  return state.usersPage.users;
};

export const getTotalCount = (state: StateType) => {
  return state.usersPage.totalUsersCount;
};

export const getCountItems = (state: StateType) => {
  return state.usersPage.countItems;
};

export const getSelectPage = (state: StateType) => {
  return state.usersPage.selectPage;
};

export const getIsFetching = (state: StateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProcess = (state: StateType) => {
  return state.usersPage.followingInProcess;
};

export const getIsAuth = (state: StateType) => {
  return state.auth.isAuth;
};
