import axios from 'axios';
import { GET_INCOMES, ADD_INCOME, EDIT_INCOME, DELETE_INCOME } from './actionTypes';

export const GetIncomes = () => (dispatch) => {
	return axios.get(`https://expensestrackerapi.herokuapp.com/api/Incomes/`).then((response) => {
		dispatch({ type: GET_INCOMES, payload: response.data });
	});
};

export const AddIncome = (data) => (dispatch) => {
	return axios.post(`https://expensestrackerapi.herokuapp.com/api/Incomes/`, data).then((response) => {
		dispatch({ type: ADD_INCOME, payload: response.data });
	});
};

export const EditIncome = (data) => (dispatch) => {
	return axios.patch(`https://expensestrackerapi.herokuapp.com/api/Incomes/${data.id}`, data).then((response) => {
		dispatch({ type: EDIT_INCOME, payload: response.data });
	});
};

export const DeleteIncome = (id) => (dispatch) => {
	return axios.delete(`https://expensestrackerapi.herokuapp.com/api/Incomes/${id}`).then((response) => {
		dispatch({ type: DELETE_INCOME, payload: response.data });
	});
};
