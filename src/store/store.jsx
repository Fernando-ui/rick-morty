import {createStore, combineReducers} from 'redux';
import { pageReducer } from '../reducers/pagesReducer';

const reducers = combineReducers({
    page: pageReducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );