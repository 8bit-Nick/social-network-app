import { IProfileState } from '../../../types/profile.interface';
import profileSlice, {
  addProfilePost,
  setUserProfile,
  setUserProfileStatus,
} from '../profileSlice';

let state: IProfileState;

beforeEach(() => {
  state = {
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
});

describe('addProfilePost testing', () => {
  test('After adding a new post the length of the array should be 5', () => {
    const newState = profileSlice(
      state,
      addProfilePost('The first profile post')
    );
    expect(newState.postsProfile.length).toBe(5);
  });

  test('After adding the text of the post should be "The second profile post"', () => {
    const newState = profileSlice(
      state,
      addProfilePost('The Second Profile Post')
    );
    expect(newState.postsProfile[4].post).toBe('The Second Profile Post');
  });
});

describe('setUserProfile testing', () => {
  const newUserProfile = {
    aboutMe: 'Test text',
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
    fullName: 'test User name',
    userId: 5,
    photos: {
      small: null,
      large: null,
    },
  };

  test('After adding a new User profile the fullName should be "test User name"', () => {
    const newState = profileSlice(state, setUserProfile(newUserProfile));
    expect(newState.userProfile.fullName).toBe('test User name');
  });

  test('The new User id must be 5', () => {
    const newState = profileSlice(state, setUserProfile(newUserProfile));
    expect(newState.userProfile.userId).toBe(5);
  });
});

describe('setUserProfileStatus testing', () => {
  test('New User profile status should be "test User profile status"', () => {
    const newState = profileSlice(
      state,
      setUserProfileStatus('test User profile status')
    );
    expect(newState.userProfileStatus).toBe('test User profile status');
  });
});
