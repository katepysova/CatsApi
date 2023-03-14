import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "@store/auth/auth.slice";

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
