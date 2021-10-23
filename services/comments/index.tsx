import axios from 'axios';
import { setNewComment } from '../../redux/reducers/comments';
import { setLoadingSubmit } from '../../redux/reducers/loading';
import { IPostComments } from '../../utils/dataTypes';
import API from '../../utils/endpoint';

export const createComment = (data: IPostComments) => async (dispatch: any) => {
  try {
    dispatch(setLoadingSubmit(true));
    const response : { data: IPostComments } = await axios.request({
      url: API.comments,
      method: 'POST',
      data: data
    });
    dispatch(setNewComment(response.data));
  } catch (error) {
    return error;
  } finally {
    dispatch(setLoadingSubmit(false));
  }
}

export const updateComment = (data: IPostComments, id: number) => async (dispatch: any) => {
  try {
    dispatch(setLoadingSubmit(true));
    const response : { data: IPostComments[] } = await axios.request({
      url: `${API.comments}/${id}`,
      method: 'PUT',
      data: data
    });
    return response.data;
  } catch (error) {
    return error;
  } finally {
    dispatch(setLoadingSubmit(false));
  }
}