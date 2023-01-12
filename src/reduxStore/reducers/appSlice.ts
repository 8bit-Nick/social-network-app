import { createSlice } from "@reduxjs/toolkit";

export type authType = {
  initialized: boolean;
};

const initialState: authType = {
  initialized: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initializedSuccess(state) {
      state.initialized = true;
    },
  },
});

export const appSliceReducer = appSlice.reducer;

export const { initializedSuccess } = appSlice.actions;
