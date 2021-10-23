import { IActionLoading } from "../../utils/dataTypes";

const SET_LOADING = "SET_LOADING";
const SET_LOADING_SUBMIT = "SET_LOADING_SUBMIT";

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  loading
})

export const setLoadingSubmit = (loadingSubmit: boolean) => ({
  type: SET_LOADING_SUBMIT,
  loadingSubmit
})

const initialState = {
  loading: false,
  loadingSubmit: false
};

const rootReducer = (state = initialState, action: IActionLoading) => {
  switch (action.type) {
    case SET_LOADING:
      const { loading } = action;
      return {
        ...state,
        loading 
      }
    case SET_LOADING_SUBMIT:
      const { loadingSubmit } = action;
      return {
        ...state,
        loadingSubmit 
      }
    default:
      return state;
  }
};

export default rootReducer;
