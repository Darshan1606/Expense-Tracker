import { combineReducers } from "redux";
import theme from "./theme/themeSlice";
import auth from "./auth";
import base from "./base";
import config from "./config";

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    base,
    config,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
