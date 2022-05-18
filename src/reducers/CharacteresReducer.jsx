import { ACTIONS } from "../actions/Actions";

const initialState = { page: 1 };

export const CharacteresReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADDPAGE:
      return { ...state, page: state.page + 1 };

    case ACTIONS.SUBTRACTPAGE:
      return { ...state, page: state.page - 1 };
    default:
      return state;
  }
};
