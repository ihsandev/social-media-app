import { call, put } from "redux-saga/effects";
import { setUser } from "../../reducers/user";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(): any {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    return error;
  }
}
