import { INIT_EXPENSES, INIT_INCOMES, INIT_LAST_RECORDS } from './actionTypes';

const initialState = {
	incomes: {},
	expenses: {},
	lastRecords: {}
};

const initReducer = (state = initialState, action) => {
	switch (action.type) {
		case INIT_INCOMES: {
			return {
				...state,
				incomes: action.payload
			};
		}
		case INIT_EXPENSES: {
			return {
				...state,
				expenses: action.payload
			};
		},
		case INIT_LAST_RECORDS: {
			return {
				...state,
				lastRecords: action.payload
			};
		}
		default:
			return state;
	}
};

export default initReducer;
