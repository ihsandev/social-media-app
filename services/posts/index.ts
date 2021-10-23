import axios from 'axios';
import { setLoadingSubmit } from '../../redux/reducers/loading';
import { setNewPost } from '../../redux/reducers/posts';
import { IListPosts, IPostData } from '../../utils/dataTypes';
import API from '../../utils/endpoint';

export const createPost = (data: IPostData) => async (dispatch: any) => {
  try {
    dispatch(setLoadingSubmit(true));
    const response : { data: IListPosts } = await axios.request({
      url: API.posts,
      method: 'POST',
      data: data
    });
    dispatch(setNewPost(response.data));
  } catch (error) {
    return error;
  } finally {
    dispatch(setLoadingSubmit(false));
  }
}

export const updatePost = (data: IPostData, id: number) => async (dispatch: any) => {
  try {
    dispatch(setLoadingSubmit(true));
    const response : { data: IListPosts[] } = await axios.request({
      url: `${API.posts}/${id}`,
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