import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { pageReducer } from "../reducers/pagesReducer";
import { CharacteresReducer } from "../reducers/CharacteresReducer";
import { LocationsReducer } from "../reducers/locationsReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  page: pageReducer,
  characteresPage:CharacteresReducer,
  locationsPage: LocationsReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
