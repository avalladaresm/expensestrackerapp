import { combineReducers } from 'redux';
import settingsReducer from '../settings/reducer';
import expensesReducer from '../expenses/reducer';

export default combineReducers({
	settingsReducer,
	expensesReducer
});
