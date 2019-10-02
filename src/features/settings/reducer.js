import { GET_CATEGORIES } from './actionTypes';

const initialState = {
	categories: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES: {
			state.categories = action.payload.map((c) => c.name);
			return {
				...state,
				categories: action.payload
			};
		}
		default:
			return state;
	}
};

export default rootReducer;
