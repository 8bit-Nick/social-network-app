import { IUserProfile } from "./profile.interface";

export interface IUserAPI {
  getUsers: (selectPage: number, countItems: number) => any;
  follow: (userId: string | undefined) => any;
  unfollow: (userId: string | undefined) => any;
}

export interface IProfileAPI {
  getProfile: (userId: string | undefined) => Promise<IUserProfile>;
  getStatus: (userId: string | undefined) => Promise<string>;
  putStatus: (status: string) => Promise<string>;
}

export interface IAuthAPI {
  me: () => Promise<any>;
  login: (email: string, password: string, rememberMe: boolean) => Promise<any>;
  logout: () => Promise<any>;
}
