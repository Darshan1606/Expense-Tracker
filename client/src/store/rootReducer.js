import { combineReducers } from "redux";
import theme from "./theme/themeSlice";
import auth from "./auth";
import base from "./base";
import config from "./config";
import income from "./income";
import giveTake from "./giveTake";

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    base,
    config,
    income,
    giveTake,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
