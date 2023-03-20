import { all } from "redux-saga/effects";
import authSaga from "@store/breeds/breeds.saga.js";

export default function* rootSaga() {
  yield all([...authSaga]);
}
