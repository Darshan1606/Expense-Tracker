import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const userSlice = createSlice({
  name: "auth/user",
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
    userLoggedOut: () => initialState,
    setOtpVerificationToken: (state, action) => {
      state.setOtpVerificationToken = action.payload;
    },
  },
});

export const { setUser, setOtpVerificationToken } = userSlice.actions;

export default userSlice.reducer;
