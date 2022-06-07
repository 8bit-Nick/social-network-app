import userLogo from './../img/userlogo.png'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

type initialType = {
  users: usersType
};
export type usersType = {
  id: number
  photoUrl: any
  followed: boolean
  fullName: string
  status: string
  location: {
    country: string
    city: string
  }
}[];

let initial = {
  users: [
    {
      id: 1,
      photoUrl: userLogo,
      followed: true,
      fullName: 'Alex',
      status: 'My first status.',
      location: {
        country: 'Ukraine',
        city: 'Kiev'
      }
    },
    {
      id: 2,
      photoUrl: userLogo,
      followed: false,
      fullName: 'John',
      status: 'My first status.',
      location: {
        country: 'Ukraine',
        city: 'Kiev'
      }
    },
    {
      id: 3,
      photoUrl: userLogo,
      followed: true,
      fullName: 'Tom',
      status: 'My first status.',
      location: {
        country: 'Ukraine',
        city: 'Kiev'
      }
    },

  ]
}

const usersReducer = (state: initialType = initial, action: ActionsTypes): initialType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            debugger
            return {...u, followed: false}
          }
          return u
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }

};

type ActionsTypes = followActionType | unfollowActionType | setUsersActionType;
type followActionType = ReturnType<typeof followAC>
type unfollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: usersType) => ({type: SET_USERS, users} as const)

export default usersReducer;