import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const giveTakeSlice = createSlice({
  name: "giveTake",
  initialState,
  reducers: {
    setGiveTakeData: (state, action) => {
      state.setGiveTakeData = action.payload;
    },
  },
});

export const { setGiveTakeData } = giveTakeSlice.actions;

export default giveTakeSlice.reducer;
