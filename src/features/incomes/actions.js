import axios from 'axios';
import { GET_INCOMES, ADD_INCOME } from './actionTypes';

export const GetIncomes = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Incomes/`).then((response) => {
		dispatch({ type: GET_INCOMES, payload: response.data });
	});
};

export const AddIncome = (data) => (dispatch) => {
	return axios.post(`http://localhost:4000/api/Incomes/`, data).then((response) => {
		dispatch({ type: ADD_INCOME, payload: response.data });
	});
};

export const GetIncomeCategory = (id) => () => {
	return axios.get(`http://localhost:4000/api/Incomes/${id}/category`).then((response) => {
		return response.data.name
	});
};