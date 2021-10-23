import { IListPosts, IActionPost } from "../../utils/dataTypes";

// GET TYPES
export const GET_POSTS : any = "GET_POSTS";
export const GET_POST : any = "GET_POST";
export const GET_ALL_POSTS : any = "GET_ALL_POSTS";

// SET TYPES
const SET_POSTS = "SET_POSTS";
const SET_POST = "SET_POST";
const SET_NEW_POST = "SET_NEW_POST";
const SET_EDIT_POST = "SET_EDIT_POST";
const SET_ALL_POSTS = "SET_ALL_POSTS";

// GET FUNCTION
export const getPosts = (start: number) => ({
  type: GET_POSTS,
  start,
});

export const getAllPosts = () => ({
  type: GET_ALL_POSTS,
});


export const getPost = (id: number) => ({
  type: GET_POST,
  id
});

// SET FUNCTION

export const setAllPosts = (posts: IListPosts) => ({
  type: SET_ALL_POSTS,
  posts
});

export const setPosts = (posts: IListPosts) => ({
  type: SET_POSTS,
  posts
});

export const setPost = (post: IListPosts) => ({
  type: SET_POST,
  post
});

export const setNewPost = (newPost: IListPosts) => ({
  type: SET_NEW_POST,
  newPost
});

export const setEditPost = (posts: IListPosts) => ({
  type: SET_EDIT_POST,
  posts
});

const initialState = {
  posts: [],
  post: {},
  newPost: {},
  loading: false
};

const rootReducer = (state = initialState, action: IActionPost) => {
  switch (action.type) {
    case SET_POSTS :
    case SET_EDIT_POST :
    case SET_ALL_POSTS :
      const { posts } = action;
      return { ...state, posts };
    case SET_POST:
      const { post } = action;
      return { ...state, post };
    case SET_NEW_POST:
      const { newPost } = action;
      return { 
        ...state, 
        posts: [ newPost,...state.posts ] 
      };
    default:
      return state;
  }
};

export default rootReducer;
