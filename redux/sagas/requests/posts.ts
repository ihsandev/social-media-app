import axios from "axios";
import { IPostData } from "../../../utils/dataTypes";
import API from "../../../utils/endpoint";

export function requestGetPosts(start: number = 0) {
  return axios.request({
    method: "get",
    url: `${API.posts}?_start=${start}&_limit=4`
  });
}

export function requestGetPost(id: number) {
  return axios.request({
    method: "get",
    url: `${API.posts}/${id}`
  });
}

export function requestGetComment(id: number) {
  return axios.request({
    method: "get",
    url: `${API.posts}/${id}/comments`
  });
}
