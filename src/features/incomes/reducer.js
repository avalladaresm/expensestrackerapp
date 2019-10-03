import { GET_INCOMES, ADD_INCOME } from './actionTypes';

const initialState = {
	incomes: []
};

const incomesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_INCOMES: {
			return {
				...state,
				incomes: action.payload
			};
		}
		case ADD_INCOME: {
			let updatedIncomes = state.incomes.slice();
			updatedIncomes.push(action.payload);
			return {
				...state,
				incomes: updatedIncomes
			};
		}
		default:
			return state;
	}
};

export default incomesReducer;
