import {
  followAC,
  setPageSelectAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleFollowingAC,
  toggleIsFetchingAC,
  unfollowAC,
} from '../redux/usersReducer';

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

export interface IState {
  users: IUser[];
  totalUsersCount: number;
  countItems: number;
  selectPage: number;
  isFetching: boolean;
  followingInProcess: number[];
}

export type ActionsTypes =
  | followACType
  | unfollowACType
  | setUsersACType
  | setPageSelectACType
  | setTotalUsersCountACType
  | toggleIsFetchingACType
  | toggleFollowingACType;
type followACType = ReturnType<typeof followAC>;
type unfollowACType = ReturnType<typeof unfollowAC>;
type setUsersACType = ReturnType<typeof setUsersAC>;
type setPageSelectACType = ReturnType<typeof setPageSelectAC>;
type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>;
type toggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>;
type toggleFollowingACType = ReturnType<typeof toggleFollowingAC>;

export type actionCreatorType = followType | unfollowType;
type followType = typeof followAC;
type unfollowType = typeof unfollowAC;
