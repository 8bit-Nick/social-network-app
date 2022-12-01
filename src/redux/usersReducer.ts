import { usersAPI } from '../api/api';
import {
  actionCreatorType,
  ActionsTypes,
  IState,
  IUser,
} from '../types/userReducer.interface';
import { DispatchType } from './redux-store';

const FOLLOW = 'redux/usersReducer/FOLLOW';
const UNFOLLOW = 'redux/userReducer/UNFOLLOW';
const SET_USERS = 'redux/usersReducer/SET_USERS';
const SET_PAGE_SELECT = 'redux/usersReducer/SET_PAGE_SELECT';
const SET_TOTAL_USERS_COUNT = 'redux/usersReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'redux/usersReducer/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING = 'redux/usersReducer/TOGGLE_FOLLOWING';

const initial: IState = {
  users: [],
  totalUsersCount: 0,
  countItems: 10,
  selectPage: 1,
  isFetching: true,
  followingInProcess: [],
};

const updateUsers = (users: IUser[], actionId: number, followed: boolean) => {
  return users.map((user: IUser) => {
    if (user.id === actionId) {
      return { ...user, followed };
    }
    return user;
  });
};

const usersReducer = (
  state: IState = initial,
  action: ActionsTypes
): IState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateUsers(state.users, action.userId, true),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateUsers(state.users, action.userId, false),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_PAGE_SELECT:
      return {
        ...state,
        selectPage: action.selectPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        followingInProcess: action.isFollowing
          ? [...state.followingInProcess, action.userId]
          : state.followingInProcess.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

// Acton Creators
export const followAC = (userId: number) => ({ type: FOLLOW, userId } as const);
export const unfollowAC = (userId: number) =>
  ({ type: UNFOLLOW, userId } as const);
export const setUsersAC = (users: IUser[]) =>
  ({ type: SET_USERS, users } as const);
export const setPageSelectAC = (selectPage: number) =>
  ({ type: SET_PAGE_SELECT, selectPage } as const);
export const setTotalUsersCountAC = (totalCount: number) =>
  ({ type: SET_TOTAL_USERS_COUNT, totalCount } as const);
export const toggleIsFetchingAC = (isFetching: boolean) =>
  ({ type: TOGGLE_IS_FETCHING, isFetching } as const);
export const toggleFollowingAC = (isFollowing: boolean, userId: number) =>
  ({ type: TOGGLE_FOLLOWING, isFollowing, userId } as const);

// Thunk Creators
export const getUsersTC =
  (selectPage: number, countItems: number) =>
  async (dispatch: DispatchType) => {
    dispatch(toggleIsFetchingAC(true));
    const data = await usersAPI.getUsers(selectPage, countItems);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setTotalUsersCountAC(data.totalCount));
  };

const followUnfollow = async (
  dispatch: DispatchType,
  userId: number,
  apiMethod: Function,
  actionCreator: actionCreatorType
) => {
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingAC(false, userId));
};

export const followTC = (userId: number) => async (dispatch: DispatchType) => {
  dispatch(toggleFollowingAC(true, userId));
  followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), followAC);
};

export const unfollowTC =
  (userId: number) => async (dispatch: DispatchType) => {
    dispatch(toggleFollowingAC(true, userId));
    followUnfollow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowAC
    );
  };

export default usersReducer;
