import axios from 'axios';
import { GET_INCOMES, ADD_INCOME } from './actionTypes';

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