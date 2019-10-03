import axios from 'axios';
import { GET_INCOMES } from '../incomes/actionTypes';
import { GET_EXPENSES } from '../expenses/actionTypes';
import { GET_CATEGORIES } from '../settings/actionTypes';

export const InitExpenses = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Expenses/`).then((response) => {
		dispatch({ type: GET_EXPENSES, payload: response.data });
	});
};

export const InitIncomes = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Incomes/`).then((response) => {
		dispatch({ type: GET_INCOMES, payload: response.data });
	});
};

export const InitCategories = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Categories/`).then((response) => {
		dispatch({ type: GET_CATEGORIES, payload: response.data });
	});
};
