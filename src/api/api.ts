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
	follow(userId: number) {
		return instance.post(`follow/${userId}`).then((response) => response.data);
	},

	unfollow(userId: number) {
		return instance
			.delete(`follow/${userId}`)
			.then((response) => response.data);
	},

	getProfile(userId: number) {
		console.warn("Obsolete method!");
		return profileAPI.getProfile(userId);
	},
};

export const profileAPI: any = {
	getProfile(userId: number) {
		return instance.get(`profile/${userId}`).then((response) => response.data);
	},

	getStatus(userId: number) {
		return instance
			.get(`profile/status/${userId}`)
			.then((response) => response.data);
	},

	putStatus(status: string) {
		return instance.put(`profile/status/`, { status });
	},
};

export const authAPI: any = {
	me() {
		return instance.get(`auth/me`).then((response) => response.data);
	},

	login(email: string, password: string, rememberMe: boolean) {
		return instance
			.post(`auth/login`, { email, password, rememberMe })
			.then((response) => response.data);
	},

	logout() {
		return instance.delete(`auth/login`).then((response) => response.data);
	},
};
