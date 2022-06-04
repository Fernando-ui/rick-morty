import { ACTIONS } from "../actions/Actions";
import { fetchGet } from "../helpers/postFetch";

const initialState = { pageOfLocations: 1 };

export const LocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADDPAGELOCATION:
    console.log('Entrando a agregar');
    
      return { ...state, pageOfLocations: state.pageOfLocations + 1 };

    case ACTIONS.SUBTRACTPAGELOCATION:
      return { ...state, pageOfLocations: state.pageOfLocations - 1 };
    case ACTIONS.CHANGEPAGELOCATION:
      return { ...state, pageOfLocations: action.payload};
    default:
      return state;
  }
};
export const fetchAPILocations = (currentPage) => {
  return (dispatch) => {
     
    fetchGet(`https://rickandmortyapi.com/api/location?page=${currentPage}`);
    
    dispatch({ type: ACTIONS.CHANGEPAGELOCATION, payload: +currentPage });
  };
};
