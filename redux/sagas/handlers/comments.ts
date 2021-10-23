import { call, put } from "redux-saga/effects";
import { IActionPost } from "../../../utils/dataTypes";
import { setComment } from "../../reducers/comments";
import { requestGetComment } from "../requests/comments";

export function* handleGetComment(action: IActionPost): any {
  try {
    const response = yield call<any>(requestGetComment, action.id);
    const { data } = response;
    yield put(setComment(data));
  } catch (error) {
    return error;
  }
}
