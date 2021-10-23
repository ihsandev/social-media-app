import { call, put } from "redux-saga/effects";
import { IDataAlbums } from "../../../utils/dataTypes";
import { setAlbums, setPhotos } from "../../reducers/albums";
import { requestGetAlbums, requestGetPhotos } from "../requests/albums";


export function* handleGetAlbums(): any {
  try {
    const response = yield call(requestGetAlbums);
    const { data } = response;
    const newData : IDataAlbums = {
      total_data: data.length,
      data
    }
    yield put(setAlbums(newData));
  } catch (error) {
    return error;
  }
}

export function* handleGetPhotos(): any {
  try {
    const response = yield call(requestGetPhotos);
    const { data } = response;
    yield put(setPhotos(data));
  } catch (error) {
    return error;
  }
}
