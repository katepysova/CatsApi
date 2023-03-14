import { put, takeLatest } from "redux-saga/effects";
import API from "@/common/api.js";
import { apiUrls } from "@constants/apiUrls.js";
import Logger from "@common/logger.js";
import { getToken, setToken } from "@store/auth/auth.slice.js";

function* initializeSession() {
  try {
    const response = yield API.get(apiUrls.getToken);
    const { token } = response.data;
    // Authorization: Bearer <access_token>
    yield put(setToken(token));
    API.defaults.headers["Authorization"] = `Bearer ${token}`;
  } catch (error) {
    yield put(setToken(null));
    Logger.log(error);
  }
}

const authSaga = [takeLatest(getToken.type, initializeSession)];

export default authSaga;
