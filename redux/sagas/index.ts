import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { handleGetPosts, handleGetPost, handleGeAlltPosts} from "./handlers/posts";
import { handleGetAlbums, handleGetPhotos } from "./handlers/albums";
import { GET_USER } from "../reducers/user";
import { GET_POSTS, GET_POST, GET_ALL_POSTS } from "../reducers/posts";
import { GET_ALBUMS, GET_PHOTOS } from "../reducers/albums";
import { GET_COMMENT } from "../reducers/comments";
import { handleGetComment } from "./handlers/comments";

export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
  yield takeLatest(GET_POSTS, handleGetPosts);
  yield takeLatest(GET_POST, handleGetPost);
  yield takeLatest(GET_COMMENT, handleGetComment);
  yield takeLatest(GET_ALBUMS, handleGetAlbums);
  yield takeLatest(GET_PHOTOS, handleGetPhotos);
  yield takeLatest(GET_ALL_POSTS, handleGeAlltPosts);
}
