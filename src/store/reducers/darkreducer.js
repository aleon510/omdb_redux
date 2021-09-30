export const darkReducer = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_DARKTHEME':
			return !state;
		default:
			return state;
	}
};
