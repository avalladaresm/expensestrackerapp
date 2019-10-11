import { GET_INCOMES, ADD_INCOME,EDIT_INCOME, DELETE_INCOME } from './actionTypes';

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
		case EDIT_INCOME: {
			let incomeToEdit = state.incomes.map((element) => {
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
				incomes: incomeToEdit
			};
		}
		case DELETE_INCOME: {
			return {
				...state
			};
		}
		default:
			return state;
	}
};

export default incomesReducer;
