import axios from 'axios';
import { GET_CATEGORIES } from './actionTypes';

export const GetCategories = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Categories/`).then((response) => {
        console.log('res', response.data);
		dispatch({ type: GET_CATEGORIES, payload: response.data });
        return response.data;
	});
};
