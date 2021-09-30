const initialState = {
	pending: false,
	movies: [],
	error: null,
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_SEARCH_PENDING':
			return {
				...state,
				pending: true,
			};
		case 'FETCH_SEARCH_SUCCESS':
			return {
				...state,
				pending: false,
				movies: action.payload,
			};
		case 'FETCH_SEARCH_ERROR':
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};
