import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState, IUser } from '../../types/users.interface';

const initialState: IUserState = {
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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    follow(state, action: PayloadAction<number>) {
      state.users = updateUsers(state.users, action.payload, true);
    },
    unfollow(state, action: PayloadAction<number>) {
      state.users = updateUsers(state.users, action.payload, false);
    },
    setUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setPageSelect(state, action: PayloadAction<number>) {
      state.selectPage = action.payload;
    },
    setTotalUsersCount(state, action: PayloadAction<number>) {
      state.totalUsersCount = action.payload;
    },
    toggleIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    toggleFollowing(
      state,
      action: PayloadAction<{ isFollowing: boolean; userId: number }>
    ) {
      state.followingInProcess = [];
      action.payload.isFollowing
        ? state.followingInProcess.push(action.payload.userId)
        : state.followingInProcess.filter((id) => id !== action.payload.userId);
    },
  },
});

export default usersSlice.reducer;

export const {
  follow,
  unfollow,
  setUsers,
  setPageSelect,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowing,
} = usersSlice.actions;
