import { call, put } from "redux-saga/effects";
import { setLoading } from "../../reducers/loading";
import { setUser } from "../../reducers/user";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(): any {
  try {
    yield put(setLoading(true))
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    return error;
  } finally {
    yield put(setLoading(false))
  }
}
