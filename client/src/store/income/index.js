import { combineReducers } from "@reduxjs/toolkit";
import income from "./incomeSlice";

const reducer = combineReducers({
  income,
});

export default reducer;
