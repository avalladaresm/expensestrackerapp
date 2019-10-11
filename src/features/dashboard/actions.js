import axios from 'axios';
import { GET_LAST_RECORDS, GET_EXPENSES_BY_CATEGORY } from './actionTypes';

export const GetLastRecords = () => (dispatch) => {
	return axios.get(`https://expensestrackerapi.herokuapp.com/api/Dashboards/getLastRecords`).then((response) => {
		dispatch({ type: GET_LAST_RECORDS, payload: response.data });
	});
};

export const GetExpensesByCategory = () => (dispatch) => {
	return axios.get(`https://expensestrackerapi.herokuapp.com/api/Dashboards/getExpensesByCategory`).then((response) => {
		dispatch({ type: GET_EXPENSES_BY_CATEGORY, payload: response.data });
	});
};
