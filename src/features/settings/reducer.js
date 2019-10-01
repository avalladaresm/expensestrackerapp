import { ADD_CATEGORY } from '../actionTypes';

const initialState = {
	categories: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_CATEGORY': {
            return {
                ...state,
                category: action.payload
            }
        }
		default:
			return state;
	}
}

export default rootReducer;
