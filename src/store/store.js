import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "@store/rootReducer.js";
import rootSaga from "@store/rootSaga.js";

import { IS_DEV } from "@constants/constants.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: IS_DEV
});

sagaMiddleware.run(rootSaga);

export default store;
