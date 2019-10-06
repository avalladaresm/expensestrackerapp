import { GET_LAST_RECORDS } from './actionTypes';

const initialState = {
	lastRecords: []
};

const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LAST_RECORDS: {
			return {
				...state,
				lastRecords: action.payload
			};
		}
		default:
			return state;
	}
};

export default dashboardReducer;
