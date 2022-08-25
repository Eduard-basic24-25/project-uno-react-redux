import {contentReducer} from './content/contentReducer';
import { combineReducers } from 'redux';
import interfaceReducer from '../storage/interface/interfaceReducer';
import themeReducer from './theme/themeReducer';

const reducer = combineReducers({
	lists: contentReducer,
	interface: interfaceReducer,
	themes:themeReducer,
})

export default reducer;

