interface IContacts {
  facebook: string | null;
  website: object | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: object | null;
  github: string | null;
  mainLink: object | null;
}

export interface IUserProfile {
  aboutMe: string | null;
  contacts: IContacts;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  userId: number | null;
  photos: { small: string; large: string };
}

export interface IProfileState {
  profilePosts: Array<{ id: number; post: string; likes: number }>;
  userProfile: IUserProfile;
  userProfileStatus: string;
}

export interface IPost {
  id: number;
  post: string;
  likes: number;
}
