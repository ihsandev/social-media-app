import axios from "axios";
import API from "../../../utils/endpoint";

export function requestGetUser() {
  return axios.request({
    method: "get",
    url: API.users
  });
}
