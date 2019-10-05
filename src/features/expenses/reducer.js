import { ADD_EXPENSE, GET_EXPENSES, ADD_EXPENSE_CATEGORY } from './actionTypes';

const initialState = {
	expenses: []
};

const expensesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EXPENSES: {
			return {
				...state,
				expenses: action.payload
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
		case ADD_EXPENSE_CATEGORY: {
			state.expenses.pop();
			let updatedExpenses = state.expenses.slice();
			updatedExpenses.push(action.payload)
			//updatedExpenses.push(action.payload)
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
