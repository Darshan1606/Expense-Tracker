import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const incomeSlice = createSlice({
  name: "income",
  initialState,
  reducers: {
    setIncomeData: (state, action) => {
      state.setIncomeData = action.payload;
    },
  },
});

export const { setIncomeData } = incomeSlice.actions;

export default incomeSlice.reducer;
