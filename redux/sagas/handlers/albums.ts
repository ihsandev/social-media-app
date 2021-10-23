import { call, put } from "redux-saga/effects";
import { IDataAlbums } from "../../../utils/dataTypes";
import { setAlbums, setPhotos } from "../../reducers/albums";
import { setLoading } from "../../reducers/loading";
import { requestGetAlbums, requestGetPhotos } from "../requests/albums";


export function* handleGetAlbums(): any {
  try {
    yield put(setLoading(true));
    const response = yield call(requestGetAlbums);
    const { data } = response;
    const newData : IDataAlbums = {
      total_data: data.length,
      data
    }
    yield put(setAlbums(newData));
  } catch (error) {
    return error;
  } finally {
    yield put(setLoading(false));
  }
}

export function* handleGetPhotos(): any {
  try {
    yield put(setLoading(true));
    const response = yield call(requestGetPhotos);
    const { data } = response;
    yield put(setPhotos(data));
  } catch (error) {
    return error;
  } finally {
    yield put(setLoading(false));
  }
}
