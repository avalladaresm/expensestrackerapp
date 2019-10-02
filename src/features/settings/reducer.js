import { GET_CATEGORIES } from './actionTypes';

const initialState = {
	categories: []
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES: {
			return {
				...state,
				categories: action.payload.map((c) => c.name)
			};
		}
		default:
			return state;
	}
};

export default settingsReducer;
