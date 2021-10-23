import { call, put } from "redux-saga/effects";
import { IActionPost } from "../../../utils/dataTypes";
import { setLoading } from "../../reducers/loading";
import { setPosts, setPost, setAllPosts } from "../../reducers/posts";
import { requestGetPosts, requestGetPost, requestGetAllPosts } from "../requests/posts";

export function* handleGeAlltPosts(): any {
  try {
    yield put(setLoading(true))
    const response = yield call(requestGetAllPosts);
    const { data } = response;
    yield put(setAllPosts(data));
  } catch (error) {
    return error;
  } finally {
    yield put(setLoading(false))
  }
}

export function* handleGetPosts(action: IActionPost): any {
  try {
    yield put(setLoading(true))
    const response = yield call(requestGetPosts, action.start);
    const { data } = response;
    yield put(setPosts(data));
  } catch (error) {
    return error;
  } finally {
    yield put(setLoading(false))
  }
}

export function* handleGetPost(action: IActionPost): any {
  try {
    yield put(setLoading(true))
    const response = yield call<any>(requestGetPost, action.id);
    const { data } = response;
    yield put(setPost(data));
  } catch (error) {
    return error;
  } finally {
    yield put(setLoading(false))
  }
}