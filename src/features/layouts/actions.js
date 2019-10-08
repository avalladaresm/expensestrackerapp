import axios from 'axios';
import { GET_INCOMES } from '../incomes/actionTypes';
import { GET_EXPENSES } from '../expenses/actionTypes';
import { GET_LAST_RECORDS, GET_EXPENSES_BY_CATEGORY } from '../dashboard/actionTypes';

export const InitExpenses = () => (dispatch) => {
	return axios.get(`https://expensestrackerapi.herokuapp.com/api/Expenses/`).then((response) => {
		dispatch({ type: GET_EXPENSES, payload: response.data });
	});
};

export const InitIncomes = () => (dispatch) => {
	return axios.get(`https://expensestrackerapi.herokuapp.com/api/Incomes/`).then((response) => {
		dispatch({ type: GET_INCOMES, payload: response.data });
	});
};

export const InitLastRecords = () => (dispatch) => {
	return axios.get(`https://expensestrackerapi.herokuapp.com/api/Dashboards/getLastRecords`).then((response) => {
		dispatch({ type: GET_LAST_RECORDS, payload: response.data });
	});
};

export const InitExpensesByCategory = () => (dispatch) => {
	return axios.get(`https://expensestrackerapi.herokuapp.com/api/Dashboards/getExpensesByCategory`).then((response) => {
		dispatch({ type: GET_EXPENSES_BY_CATEGORY, payload: response.data });
	});
};
