import { GET_LAST_RECORDS, GET_EXPENSES_BY_CATEGORY } from './actionTypes';

const initialState = {
	lastRecords: [],
	expensesByCategory: []
};

const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LAST_RECORDS: {
			return {
				...state,
				lastRecords: action.payload
			};
		}
		case GET_EXPENSES_BY_CATEGORY: {
			return {
				...state,
				expensesByCategory: action.payload
			};
		}
		default:
			return state;
	}
};

export default dashboardReducer;
