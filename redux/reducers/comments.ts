import { IActionComment, IComment, IPostComments } from "../../utils/dataTypes";

// GET TYPES
export const GET_COMMENT : any = "GET_COMMENT";

// SET TYPES
const SET_COMMENT = "SET_COMMENT";
const SET_NEW_COMMENT = "SET_NEW_COMMENT";
const SET_EDIT_COMMENT = "SET_EDIT_COMMENT";

export const getComment = (id: number) => ({
  type: GET_COMMENT,
  id,
});


export const setComment = (comment: IComment) => ({
  type: SET_COMMENT,
  comment
});

export const setNewComment = (newComment: IPostComments) => ({
  type: SET_NEW_COMMENT,
  newComment
});

export const setEditComment = (comment: IPostComments) => ({
  type: SET_EDIT_COMMENT,
  comment
});

const initialState = {
  comment: [],
  newComment: {}
};

const rootReducer = (state = initialState, action: IActionComment) => {
  switch (action.type) {
    case SET_COMMENT:
    case SET_EDIT_COMMENT:
      const { comment } = action;
      return { ...state, comment };
    case SET_NEW_COMMENT:
      const { newComment } = action;
      return { 
        ...state, 
        comment: [ newComment,...state.comment ] 
      };
    default:
      return state;
  }
};

export default rootReducer;
