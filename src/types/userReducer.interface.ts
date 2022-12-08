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

type followType = typeof follow;
type unfollowType = typeof unfollow;
export type actionCreatorType = followType | unfollowType;
