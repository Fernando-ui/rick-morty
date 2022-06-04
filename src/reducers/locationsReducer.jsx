import { ACTIONS } from "../actions/Actions";
import { fetchGet } from "../helpers/postFetch";

const initialState = { pageOfLocations: 1 };

export const LocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADDPAGELOCATION:
      return { ...state, pageOfLocations: state.pageOfCharacteres + 1 };

    case ACTIONS.SUBTRACTPAGELOCATION:
      return { ...state, pageOfLocations: state.pageOfCharacteres - 1 };
    case ACTIONS.CHANGEPAGELOCATION:
      return { ...state, pageOfLocations: action.payload};
    default:
      return state;
  }
};
export const fetchAPILocations = (currentPage) => {
  return (dispatch) => {
     
    fetchGet(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
    console.log(currentPage,'Tenemos la current page');
    
    dispatch({ type: ACTIONS.CHANGEPAGELOCATION, payload: +currentPage });
  };
};
