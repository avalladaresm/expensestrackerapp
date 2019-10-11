import { ADD_EXPENSE, GET_EXPENSES, EDIT_EXPENSE } from './actionTypes';

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
			updatedExpenses.push(action.payload);
			return {
				...state,
				expenses: updatedExpenses
			};
		}
		case EDIT_EXPENSE: {
			let expenseToEdit = state.expenses.map((element) => {
				if (element.id != action.payload.id) {
					return {
						...element
					};
				}
				return {
					...action.payload
				};
			});
			return {
				...state,
				expenses: expenseToEdit
			};
		}
		default:
			return state;
	}
};

export default expensesReducer;
