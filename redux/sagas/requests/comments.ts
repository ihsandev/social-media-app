import axios from "axios";
import API from "../../../utils/endpoint";

export function requestGetComment(id: number) {
  return axios.request({
    method: "get",
    url: `${API.posts}/${id}/comments`
  });
}
