import { INIT_EXPENSES, INIT_INCOMES } from './actionTypes';

const initialState = {
	expenses: {},
	incomes: {}
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
		default:
			return state;
	}
};

export default initReducer;
