import { profileAPI } from "api";
import { setUserProfile, setUserProfileStatus, AppDispatch } from "reduxStore";

export const getUserProfileTC =
  (userId: string | undefined) => async (dispatch: AppDispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  };

export const getUserProfileStatusTC =
  (userId: string | undefined) => async (dispatch: AppDispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setUserProfileStatus(data));
  };

export const updateUserProfileStatusTC =
  (status: string) => async (dispatch: AppDispatch) => {
    await profileAPI.putStatus(status);
    dispatch(setUserProfileStatus(status));
  };
