import {
  followTC,
  unfollowTC,
} from '../store/reducers/thunkCreators/usersThunkCreator';
import { follow, unfollow } from '../store/reducers/usersSlice';

export interface IUser {
  name: string;
  id: number;
  photos: { small: null | string; large: null | string };
  status: string;
  followed: boolean;
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

type followTCType = ReturnType<typeof followTC>;
type unfollowTCType = ReturnType<typeof unfollowTC>;
export type thunkCreatorType = followTCType | unfollowTCType;
