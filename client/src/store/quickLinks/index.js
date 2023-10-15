import { combineReducers } from "@reduxjs/toolkit";
import quickLinks from "./quickLinksSlice";

const reducer = combineReducers({
    quickLinks,
});

export default reducer;
