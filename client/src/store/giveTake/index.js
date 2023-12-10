import { combineReducers } from "@reduxjs/toolkit";
import giveTake from "./giveTakeSlice";

const reducer = combineReducers({
  giveTake,
});

export default reducer;
