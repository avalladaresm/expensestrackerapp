import axios from 'axios';
import { GET_LAST_RECORDS } from './actionTypes';

export const GetLastRecords = () => (dispatch) => {
	return axios.get(`http://localhost:4000/api/Dashboards/getLastRecords`).then((response) => {
		console.log('last', response.data);
		dispatch({ type: GET_LAST_RECORDS, payload: response.data });
	});
};
