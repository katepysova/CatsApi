import { all } from "redux-saga/effects";
import breedsSaga from "@store/breeds/breeds.saga.js";

export default function* rootSaga() {
  yield all([...breedsSaga]);
}
