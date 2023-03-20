import { put, takeLatest } from "redux-saga/effects";
import API from "@/common/api.js";
import { apiUrls } from "@constants/apiUrls.js";
import Logger from "@common/logger.js";
import { getBreeds, setBreeds } from "@store/breeds/breeds.slice.js";

const formatOptions = (options) => {
  return options.map((option) => ({
    value: option.id,
    label: option.name
  }));
};

function* getBreedsWorker() {
  try {
    const response = yield API.get(apiUrls.breeds);
    const breeds = response.data;
    const formattedBreeds = formatOptions(breeds);
    yield put(setBreeds(formattedBreeds));
  } catch (error) {
    Logger.error(error);
  }
}

const authSaga = [takeLatest(getBreeds.type, getBreedsWorker)];

export default authSaga;
