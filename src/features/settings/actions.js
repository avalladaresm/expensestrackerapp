import axios from 'axios';

export const AddCategory = (name) = (dispatch) => {

	return axios.post(`http://localhost:4000/api/Categories/`, name).then((response) => {
        console.log(response.data)
        dispatch()
    });
};
