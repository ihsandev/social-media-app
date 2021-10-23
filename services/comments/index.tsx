import axios from 'axios';
import { setNewComment } from '../../redux/reducers/comments';
import { IPostComments } from '../../utils/dataTypes';
import API from '../../utils/endpoint';

export const createComment = (data: IPostComments) => async (dispatch: any) => {
  try {
    const response : { data: IPostComments } = await axios.request({
      url: API.comments,
      method: 'POST',
      data: data
    });
    dispatch(setNewComment(response.data));
  } catch (error) {
    return error;
  }
}

export const updateComment = async (data: IPostComments, id: number) => {
  try {
    const response : { data: IPostComments[] } = await axios.request({
      url: `${API.comments}/${id}`,
      method: 'PUT',
      data: data
    });
    return response.data;
  } catch (error) {
    return error;
  }
}