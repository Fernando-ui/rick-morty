
import { ACTIONS } from "../actions/Actions";

const initialState = {
  page: 1,
};
//TODO  Aplicar el thunk para hacer la peticion de la api
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

}
