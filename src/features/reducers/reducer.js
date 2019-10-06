import { combineReducers } from 'redux';
import expensesReducer from '../expenses/reducer';
import incomesReducer from '../incomes/reducer';

export default combineReducers({
	expensesReducer,
	incomesReducer
});
