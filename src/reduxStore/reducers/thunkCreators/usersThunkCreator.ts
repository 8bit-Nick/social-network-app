import { usersAPI } from "api";
import { actionCreatorType } from "types";
import {
  follow,
  setTotalUsersCount,
  setUsers,
  toggleFollowing,
  toggleIsFetching,
  unfollow,
  AppDispatch,
} from "reduxStore";

export const getUsersTC =
  (selectPage: number, countItems: number) => async (dispatch: AppDispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersAPI.getUsers(selectPage, countItems);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };

const followUnfollow = async (
  dispatch: AppDispatch,
  userId: number,
  apiMethod: Function,
  actionCreator: actionCreatorType
) => {
  const data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowing({ isFollowing: false, userId }));
};

export const followTC = (userId: number) => async (dispatch: AppDispatch) => {
  dispatch(toggleFollowing({ isFollowing: true, userId }));
  followUnfollow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow);
};

export const unfollowTC = (userId: number) => async (dispatch: AppDispatch) => {
  dispatch(toggleFollowing({ isFollowing: true, userId }));
  followUnfollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollow);
};
