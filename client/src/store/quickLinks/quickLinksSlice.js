import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const quickLinksSlice = createSlice({
  name: "quickLinks",
  initialState,
  reducers: {
    setQuickLinksData: (state, action) => {
      state.setQuickLinksData = action.payload;
    },
  },
});

export const { setQuickLinksData } = quickLinksSlice.actions;

export default quickLinksSlice.reducer;
