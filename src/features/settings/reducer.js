import { ADD_CATEGORY, GET_CATEGORIES } from './actionTypes';

const initialState = {
	categories: []
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORIES: {
			return {
				...state,
				categories: action.payload
			};
		}
		case ADD_CATEGORY: {
			let updatedCategories = state.categories.slice();
			updatedCategories.push(action.payload)
			return {
				...state,
				categories: updatedCategories
			};
		}
		default:
			return state;
	}
};

export default settingsReducer;
