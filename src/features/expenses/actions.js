import axios from 'axios';
import { /* GET_EXPENSES,*/ ADD_EXPENSE } from './actionTypes';

/* export const GetExpenses = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Expenses/`).then((response) => {
		dispatch({ type: GET_EXPENSES, payload: response.data });
	});
}; */

export const AddExpense = (data) => (dispatch) => {
	return axios.post(`http://localhost:4000/api/Expenses/`, data).then((response) => {
		dispatch({ type: ADD_EXPENSE, payload: response.data });
	});
};