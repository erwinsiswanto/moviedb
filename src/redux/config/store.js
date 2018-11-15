import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import baseReducer from '../reducers/base';
import searchReducer from "../reducers/search";

const reducers = combineReducers({
    base: baseReducer,
    search: searchReducer
});

const middleware = applyMiddleware(logger, thunk);

export default createStore(reducers, middleware);