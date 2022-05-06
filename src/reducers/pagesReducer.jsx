//TODO Hacer acciones

import { ACTIONS } from "../actions/Actions";

const initialState ={
    page:1,
}


export const pageReducer = (state= initialState, action) => {
    switch (action.type) {
        case ACTIONS.SAVEPAGE:
        return {
            ...state
        };
        default:
        return state;
    }
}