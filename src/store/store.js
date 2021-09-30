import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

const middlewares = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	createRootReducer,
	composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
