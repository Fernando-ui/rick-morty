import { ACTIONS } from "../actions/Actions";
import { fetchGet } from "../helpers/postFetch";

const initialState = { pageOfCharacteres: 1 };

export const CharacteresReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADDPAGE:
      return { ...state, pageOfCharacteres: state.pageOfCharacteres + 1 };

    case ACTIONS.SUBTRACTPAGE:
      return { ...state, pageOfCharacteres: state.pageOfCharacteres - 1 };
    case ACTIONS.CHANGEPAGECHARACTER:
      
      
      return { ...state, pageOfCharacteres: action.payload};
    default:
      return state;
  }
};
export const fetchAPICharacteres = (currentPage) => {
  return (dispatch) => {
    const algo = fetchGet(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
    console.log(algo,'Tenemos la respuesta de la peticion');
    
    console.log('Entrando al thungk');
    
    dispatch({ type: ACTIONS.CHANGEPAGECHARACTER, payload: +currentPage });
  };
};
