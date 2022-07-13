import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer from './rootReducer.js'

const store = createStore(reducer, applyMiddleware(logger));

export default store;