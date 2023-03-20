import { combineReducers } from "@reduxjs/toolkit";

import breedsReducer from "@store/breeds/breeds.slice.js";

const rootReducer = combineReducers({
  breeds: breedsReducer
});

export default rootReducer;
