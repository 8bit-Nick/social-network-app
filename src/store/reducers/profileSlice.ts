import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IProfileState,
  IUserProfile,
} from '../../types/profileReducer.interface';

const initialState: IProfileState = {
  postsProfile: [
    {
      id: 1,
      post: 'Lorem ipsum dolor, sit amet consectetur adipisicing.',
      likes: 15,
    },
    {
      id: 2,
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis et nam assumenda soluta est!',
      likes: 0,
    },
    { id: 3, post: 'Lorem ipsum dolor sit amet.', likes: 370 },
    {
      id: 4,
      post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, deleniti.',
      likes: 3,
    },
  ],
  userProfile: {
    aboutMe: '',
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: '',
    userId: 3,
    photos: {
      small: null,
      large: null,
    },
  },
  userProfileStatus: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfilePost(state, action: PayloadAction<string>) {
      state.postsProfile.push({ id: 5, post: action.payload, likes: 0 });
    },
    setUserProfile(state, action: PayloadAction<IUserProfile>) {
      state.userProfile = action.payload;
    },
    setUserProfileStatus(state, action: PayloadAction<string>) {
      state.userProfileStatus = action.payload;
    },
  },
});

export default profileSlice.reducer;

export const { addProfilePost, setUserProfile, setUserProfileStatus } =
  profileSlice.actions;
