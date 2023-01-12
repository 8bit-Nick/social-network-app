import axios from "axios";

import { IAuthAPI, IProfileAPI, IUserAPI } from "types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a99ae56a-8de1-41e1-bdc2-66384efc5e52",
  },
});

export const usersAPI: IUserAPI = {
  async getUsers(selectPage: number, countItems: number) {
    const response = await instance.get(
      `users?page=${selectPage}&count=${countItems}`
    );

    return response.data;
  },
  async follow(userId: string | undefined) {
    const response = await instance.post(`follow/${userId}`);
    console.log(response.data);
    return response.data;
  },

  async unfollow(userId: string | undefined) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },
};

export const profileAPI: IProfileAPI = {
  async getProfile(userId: string | undefined) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },

  async getStatus(userId: string | undefined) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },

  async putStatus(status: string) {
    return await instance.put(`profile/status/`, { status });
  },
};

export const authAPI: IAuthAPI = {
  async me() {
    const response = await instance.get(`auth/me`);
    return response.data;
  },

  async login(email: string, password: string, rememberMe: boolean) {
    const response = await instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
    return response.data;
  },

  async logout() {
    const response = await instance.delete(`auth/login`);
    return response.data;
  },
};
