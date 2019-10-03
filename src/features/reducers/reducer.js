import { combineReducers } from 'redux';
import settingsReducer from '../settings/reducer';
import expensesReducer from '../expenses/reducer';
import incomesReducer from '../incomes/reducer';

export default combineReducers({
	settingsReducer,
	expensesReducer,
	incomesReducer
});
