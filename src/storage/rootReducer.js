import {contentReducer} from './content/contentReducer';
import { combineReducers } from 'redux';
import interfaceReducer from '../storage/interface/interfaceReducer';

const reducer = combineReducers({
	lists: contentReducer,
	interface: interfaceReducer
})

export default reducer;

