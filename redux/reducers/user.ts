import { IActionUser, IUserType } from "../../utils/dataTypes";

export const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

export const getUser = () => ({
  type: GET_USER
});

export const setUser = (user: IUserType) => ({
  type: SET_USER,
  user
});

const initialState = {
  user: []
};

const rootReducer = (state = initialState, action: IActionUser) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
};

export default rootReducer;
