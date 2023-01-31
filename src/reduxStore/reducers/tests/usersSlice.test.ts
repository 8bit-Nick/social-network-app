import { IUser, IUserState } from "types";
import {
  usersSliceReducer,
  follow,
  setPageSelect,
  setTotalUsersCount,
  setUsers,
  toggleFollowing,
  toggleIsFetching,
  unfollow,
} from "../usersSlice";

let state: IUserState;
let newUsers: IUser[];
beforeEach(() => {
  newUsers = [
    {
      id: 1,
      followed: false,
      name: "User 1",
      status: "Status 1",
      photos: { small: null, large: null },
    },
    {
      id: 2,
      followed: false,
      name: "User 2",
      status: "Status 2",
      photos: { small: null, large: null },
    },
    {
      id: 3,
      followed: true,
      name: "User 3",
      status: "Status 3",
      photos: { small: null, large: null },
    },
  ];

  state = {
    users: newUsers,
    totalUsersCount: 0,
    countItems: 10,
    selectPage: 1,
    isFetching: true,
    followingInProcess: [],
  };
});

describe("follow / unfollow testing", () => {
  test('After subscribing a user with id 2 "followed" must change on true', () => {
    const newState = usersSliceReducer(state, follow(2));
    expect(newState.users[1].followed).toBeTruthy();
  });

  test('User with id 1 "followed" not changed', () => {
    const newState = usersSliceReducer(state, follow(2));
    expect(newState.users[0].followed).toBeFalsy();
  });

  test('After unsubscribing a user with id 3 "followed" must change on false', () => {
    const newState = usersSliceReducer(state, unfollow(3));
    expect(newState.users[2].followed).not.toBeTruthy();
  });
});

describe("setUsers testing", () => {
  const emptyState = {
    users: [],
    totalUsersCount: 0,
    countItems: 10,
    selectPage: 1,
    isFetching: true,
    followingInProcess: [],
  };

  test("After add new users array length must be 3", () => {
    const newState = usersSliceReducer(emptyState, setUsers(newUsers));
    expect(newState.users.length).toBe(3);
  });

  test('User name with id 2 must be "User 2"', () => {
    const newState = usersSliceReducer(emptyState, setUsers(newUsers));
    expect(newState.users[1].name).toBe("User 2");
  });
});

describe("setPageSelect testing", () => {
  test('When we selected page number 8 "selectPage" must be 8', () => {
    const newState = usersSliceReducer(state, setPageSelect(8));
    expect(newState.selectPage).toBe(8);
  });
});

describe("setTotalUsersCount testing", () => {
  test('When we get total count of users "totalUsersCount" must be 123', () => {
    const newState = usersSliceReducer(state, setTotalUsersCount(123));
    expect(newState.totalUsersCount).toBe(123);
  });
});

describe("toggleIsFetching testing", () => {
  test('"isFetching" should change to false', () => {
    const newState = usersSliceReducer(state, toggleIsFetching(false));
    expect(newState.isFetching).toBeFalsy();
  });
});

describe("toggleFollowing testing", () => {
  test('The length of the "followingInProcess" array must be 1', () => {
    const newState = usersSliceReducer(
      state,
      toggleFollowing({ isFollowing: true, userId: 1 })
    );
    expect(newState.followingInProcess.length).toBe(1);
  });

  test('The id in the "following process" array must be equal to 3', () => {
    const newState = usersSliceReducer(
      state,
      toggleFollowing({ isFollowing: true, userId: 3 })
    );
    expect(newState.followingInProcess[0]).toEqual(3);
  });

  test('The "followingInProcess" array must be empty', () => {
    const newState = usersSliceReducer(
      state,
      toggleFollowing({ isFollowing: false, userId: 2 })
    );
    expect(newState.followingInProcess.length).toBe(0);
  });
});
