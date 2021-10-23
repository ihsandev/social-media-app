import axios from 'axios';
import { setNewPost } from '../../redux/reducers/posts';
import { IListPosts, IPostData } from '../../utils/dataTypes';
import API from '../../utils/endpoint';

export const createPost = (data: IPostData) => async (dispatch: any) => {
  try {
    const response : { data: IListPosts } = await axios.request({
      url: API.posts,
      method: 'POST',
      data: data
    });
    dispatch(setNewPost(response.data));
  } catch (error) {
    return error;
  }
}

export const updatePost = async (data: IPostData, id: number) => {
  try {
    const response : { data: IListPosts[] } = await axios.request({
      url: `${API.posts}/${id}`,
      method: 'PUT',
      data: data
    });
    return response.data;
  } catch (error) {
    return error;
  }
}