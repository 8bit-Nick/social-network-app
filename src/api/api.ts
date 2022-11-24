import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a99ae56a-8de1-41e1-bdc2-66384efc5e52',
  },
});

export const usersAPI: any = {
  async getUsers(selectPage: number, countItems: number) {
    const response = await instance.get(
      `users?page=${selectPage}&count=${countItems}`
    );
    return response.data;
  },
  async follow(userId: number) {
    const response = await instance.post(`follow/${userId}`);
    return response.data;
  },

  async unfollow(userId: number) {
    const response = await instance.delete(`follow/${userId}`);
    return response.data;
  },

  getProfile(userId: number) {
    console.warn('Obsolete method!');
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI: any = {
  async getProfile(userId: number) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },

  async getStatus(userId: number) {
    const response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },

  async putStatus(status: string) {
    return await instance.put(`profile/status/`, { status });
  },
};

export const authAPI: any = {
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
