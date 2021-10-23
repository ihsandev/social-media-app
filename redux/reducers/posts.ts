import { IListPosts, IActionPost, IComment } from "../../utils/dataTypes";

// GET TYPES
export const GET_POSTS : any = "GET_POSTS";
export const GET_POST : any = "GET_POST";
export const GET_COMMENT : any = "GET_COMMENT";

// SET TYPES
const SET_POSTS = "SET_POSTS";
const SET_POST = "SET_POST";
const SET_COMMENT = "SET_COMMENT";
const SET_NEW_POST = "SET_NEW_POST";
const SET_EDIT_POST = "SET_EDIT_POST";

// GET FUNCTION
export const getPosts = (start: number) => ({
  type: GET_POSTS,
  start,
});

export const getPost = (id: number) => ({
  type: GET_POST,
  id
});

export const getComment = (id: number) => ({
  type: GET_COMMENT,
  id,
});

// SET FUNCTION
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

export const setComment = (comment: IComment) => ({
  type: SET_COMMENT,
  comment
});

const initialState = {
  posts: [],
  post: {},
  newPost: {},
  comment: []
};

const rootReducer = (state = initialState, action: IActionPost) => {
  switch (action.type) {
    case SET_POSTS :
    case SET_EDIT_POST :
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
    case SET_COMMENT:
      const { comment } = action;
      return { ...state, comment };
    default:
      return state;
  }
};

export default rootReducer;
