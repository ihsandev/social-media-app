import { call, put } from "redux-saga/effects";
import { IActionPost } from "../../../utils/dataTypes";
import { setPosts, setPost } from "../../reducers/posts";
import { requestGetPosts, requestGetPost } from "../requests/posts";

export function* handleGetPosts(action: IActionPost): any {
  try {
    const response = yield call(requestGetPosts, action.start);
    const { data } = response;
    console.log('getposts', data)
    yield put(setPosts(data));
  } catch (error) {
    return error;
  }
}

export function* handleGetPost(action: IActionPost): any {
  try {
    const response = yield call<any>(requestGetPost, action.id);
    const { data } = response;
    yield put(setPost(data));
  } catch (error) {
    return error;
  }
}