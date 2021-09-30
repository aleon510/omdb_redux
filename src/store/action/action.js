export const toggle_darkTheme = () => {
	return {
		type: 'TOGGLE_DARKTHEME',
	};
};

export const increment = () => {
	return {
		type: 'INCREMENT',
	};
};
export const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};

export const fetchSearchPending = () => {
	return {
		type: 'FETCH_SEARCH_PENDING',
	};
};
export const fetchSearchSuccess = search => {
	return {
		type: 'FETCH_SEARCH_SUCCESS',
		payload: search,
	};
};
export const fetchSearchError = error => {
	return {
		type: 'FETCH_SEARCH_ERROR',
		error: error,
	};
};
