
import { ACTIONS } from "../actions/Actions";
import { fetchGet } from "../helpers/postFetch";

const initialState = {
  page:1
};
export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADDPAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case ACTIONS.SUBTRACTPAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    case ACTIONS.CHANGEPAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
export const fetchAPIRickMorty = (currentPage) => {
  
  return (dispatch)=>{
    fetchGet(`https://rickandmortyapi.com/api/location/?page=${currentPage}`);
    dispatch({type: ACTIONS.CHANGEPAGE, payload: +currentPage});
    
    
  }
}

