import { ADD_EXPENSE, GET_EXPENSES } from './actionTypes';

const initialState = {
	expenses: []
};

const expensesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EXPENSES: {
			return {
				...state,
				expenses: action.payload.map((e) => e.name)
			};
		}
		case ADD_EXPENSE: {
			let updatedExpenses = state.expenses.slice();
			updatedExpenses.push(action.payload)
			return {
				...state,
				expenses: updatedExpenses
			};
		}
		default:
			return state;
	}
};

export default expensesReducer;
