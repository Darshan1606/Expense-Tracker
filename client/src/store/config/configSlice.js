import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setExpenseCategoryData: (state, action) => {
      state.setExpenseCategoryData = action.payload;
    },
  },
});

export const { setExpenseCategoryData } = configSlice.actions;

export default configSlice.reducer;
