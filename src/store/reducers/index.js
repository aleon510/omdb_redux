import { combineReducers } from 'redux';
import { counter } from './counter';
import { darkReducer } from './darkreducer';
import { searchReducer } from './searchreducer';

const createRootReducer = combineReducers({
	counter,
	dark: darkReducer,
	search: searchReducer,
});
export default createRootReducer;
