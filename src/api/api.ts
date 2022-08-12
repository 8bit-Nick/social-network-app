import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "a99ae56a-8de1-41e1-bdc2-66384efc5e52",
	},
});

export const usersAPI: any = {
	getUsers(selectPage: number, countItems: number) {
		return instance
			.get(`users?page=${selectPage}&count=${countItems}`)
			.then((response) => response.data);
	},
};

export const subscribeAPI: any = {
	followUser(userId: number) {
		return instance.post(`follow/${userId}`).then((response) => response.data);
	},

	unfollowUser(userId: number) {
		return instance
			.delete(`follow/${userId}`)
			.then((response) => response.data);
	},
};

export const authAPI: any = {
	logIn() {
		return instance.get(`auth/me`).then((response) => response.data);
	},
};
