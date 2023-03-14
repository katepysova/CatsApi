import { all } from "redux-saga/effects";
import authSaga from "@store/auth/auth.saga.js";

export default function* rootSaga() {
  yield all([...authSaga]);
}
