import axios from "axios";
import API from "../../../utils/endpoint";

export function requestGetAlbums() {
  return axios.request({
    method: "get",
    url: API.albums
  });
}

export function requestGetPhotos() {
  return axios.request({
    method: "get",
    url: API.photos
  });
}
