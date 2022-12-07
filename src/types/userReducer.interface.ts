import {
  follow,
  setPageSelect,
  setTotalUsersCount,
  setUsers,
  toggleFollowing,
  toggleIsFetching,
  unfollow,
} from './../store/reducers/usersSlice';

export interface IUser {
  id: number;
  photos?: any;
  followed: boolean;
  name: string;
  status: string;
  location?: {
    country: string;
    city: string;
  };
}

export interface IUserState {
  users: IUser[];
  totalUsersCount: number;
  countItems: number;
  selectPage: number;
  isFetching: boolean;
  followingInProcess: number[];
}

export type ActionsTypes =
  | followType
  | unfollowType
  | setUsersType
  | setPageSelectType
  | setTotalUsersCountType
  | toggleIsFetchingType
  | toggleFollowingType;
type followType = typeof follow;
type unfollowType = typeof unfollow;
type setUsersType = typeof setUsers;
type setPageSelectType = typeof setPageSelect;
type setTotalUsersCountType = typeof setTotalUsersCount;
type toggleIsFetchingType = typeof toggleIsFetching;
type toggleFollowingType = typeof toggleFollowing;

export type actionCreatorType = followType | unfollowType;
