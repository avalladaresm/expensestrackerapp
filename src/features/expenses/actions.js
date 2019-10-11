import axios from 'axios';
import { GET_EXPENSES, ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from './actionTypes';

export const GetExpenses = () => (dispatch) => {
	return axios.get(`https://expensestrackerapi.herokuapp.com/api/Expenses/`).then((response) => {
		dispatch({ type: GET_EXPENSES, payload: response.data });
	});
};

export const AddExpense = (data) => (dispatch) => {
	return axios.post(`https://expensestrackerapi.herokuapp.com/api/Expenses/`, data).then((response) => {
		dispatch({ type: ADD_EXPENSE, payload: response.data });
	});
};

export const EditExpense = (data) => (dispatch) => {
	return axios.patch(`http://localhost:4000/api/Expenses/${data.id}`, data).then((response) => {
		dispatch({ type: EDIT_EXPENSE, payload: response.data });
	});
};

export const DeleteExpense = (id) => (dispatch) => {
	return axios.delete(`http://localhost:4000/api/Expenses/${id}`).then((response) => {
		dispatch({ type: DELETE_EXPENSE, payload: response.data });
	});
};
