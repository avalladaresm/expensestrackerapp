import axios from 'axios';
import { GET_CATEGORIES, ADD_CATEGORY } from './actionTypes';

export const GetCategories = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Categories/`).then((response) => {
		dispatch({ type: GET_CATEGORIES, payload: response.data });
	});
};

export const AddCategory = (name) => (dispatch) => {
	let data = {
		name
	}

	return axios.post(`http://localhost:4000/api/Categories/`, data).then((response) => {
		dispatch({ type: ADD_CATEGORY, payload: response.data.name });
	});
};
