import axios from 'axios';
//import { INIT_INCOMES } from '../incomes/reducer';
import { GET_EXPENSES } from '../expenses/actionTypes';
import { GET_CATEGORIES } from '../settings/actionTypes';

export const InitExpenses = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Expenses/`).then((response) => {
		console.log('inite');
		dispatch({ type: GET_EXPENSES, payload: response.data });
	});
};

/* export const InitIncomes = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Incomes/`).then((response) => {
		console.log('initi');
		dispatch({ type: INIT_INCOMES, payload: response.data });
	});
}; */

export const InitCategories = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Categories/`).then((response) => {
		console.log('initc');
		dispatch({ type: GET_CATEGORIES, payload: response.data });
	});
};
