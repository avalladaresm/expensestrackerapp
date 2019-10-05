import { INIT_EXPENSES, INIT_INCOMES, INIT_CATEGORIES } from './actionTypes';

const initialState = {
	expenses: [],
	incomes: [],
	categories: []
};

const initReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_EXPENSES: {
			return {
				...state,
				expenses: action.payload
			};
		}
		case INIT_INCOMES: {
			return {
				...state,
				incomes: action.payload
			};
		}
		case INIT_CATEGORIES: {
			return {
				...state,
				categories: action.payload.map((c) => c.name)
			};
		}
		default:
			return state;
	}
};

export default initReducer;
