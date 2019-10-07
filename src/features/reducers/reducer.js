import { combineReducers } from 'redux';
import incomesReducer from '../incomes/reducer';
import expensesReducer from '../expenses/reducer';
import dashboardReducer from '../dashboard/reducer';

export default combineReducers({
	incomesReducer,
	expensesReducer,
	dashboardReducer
});
