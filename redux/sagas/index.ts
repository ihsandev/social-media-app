import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { handleGetPosts, handleGetPost, handleGetComment} from "./handlers/posts";
import { handleGetAlbums, handleGetPhotos } from "./handlers/albums";
import { GET_USER } from "../reducers/user";
import { GET_POSTS, GET_POST, GET_COMMENT } from "../reducers/posts";
import { GET_ALBUMS, GET_PHOTOS } from "../reducers/albums";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(GET_POSTS, handleGetPosts);
  yield takeLatest(GET_POST, handleGetPost);
  yield takeLatest(GET_COMMENT, handleGetComment);
  yield takeLatest(GET_ALBUMS, handleGetAlbums);
  yield takeLatest(GET_PHOTOS, handleGetPhotos);
}
