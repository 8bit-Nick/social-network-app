type contacts = {
	facebook: string | null;
	website: object | null;
	vk: string | null;
	twitter: string | null;
	instagram: string | null;
	youtube: object | null;
	github: string | null;
	mainLink: object | null;
};

export type userProfile = {
	aboutMe: string | null;
	contacts: contacts | null;
	lookingForAJob: boolean | null;
	lookingForAJobDescription: string | null;
	fullName: string | null;
	userId: number | null;
	photos: { small: string | null; large: string | null } | null;
};

export type ProfileType = {
	postsData: Array<{ id: number; post: string; likes: number }>;
	textData: string;
	profile: userProfile;
	userProfileStatus: string;
};
