import axios from 'axios';
import { GET_EXPENSES, ADD_EXPENSE, ADD_EXPENSE_CATEGORY } from './actionTypes';

export const GetExpenses = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Expenses/`).then((response) => {
		dispatch({ type: GET_EXPENSES, payload: response.data });
	});
};

export const AddExpense = async (data) => {
	let post = await axios.post(`http://localhost:4000/api/Expenses/`, data);
	console.log('post', post);

	return (dispatch) => {
		dispatch({ type: ADD_EXPENSE, payload: post });
	};
	/* console.log("post",postResponse)
	console.log(data)
	const getResponse = await axios.get(
		`http://localhost:4000/api/Expenses/${data.id}/getExpenseCategory`
	);
	console.log("get",getResponse) */
};

export const AddExpenseCategory = async (data, dispatch) => {
	console.log('data1', data);
	const getResponse = await axios.get(`http://localhost:4000/api/Expenses/${data.id}/getExpenseCategory`);
	console.log('data2', getResponse);

	return axios.patch(`http://localhost:4000/api/Expenses/${getResponse.data.id}`).then((response) => {
		console.log('response.data', response.data);

		return dispatch({ type: ADD_EXPENSE, payload: response.data });
	});
	//return axios.post(`http://localhost:4000/api/Expenses/`, data).then((response) => {
	/* const postResponse = await axios.post(`http://localhost:4000/api/Expenses/`, data);
	console.log('id', postResponse.data.id);
	const getResponse = await axios.get(
		`http://localhost:4000/api/Expenses/${2}/getExpenseCategory`
	);
	console.log('get', getResponse);
	let mergedResponses = { ...postResponse.data, ...getResponse.data };
	console.log(mergedResponses); */
};

export const GetExpenseCategory = (id) => () => {
	return axios.get(`http://localhost:4000/api/Expenses/${id}/getExpenseCategory`).then((response) => {
		return response.data;
	});
};
