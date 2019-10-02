import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'antd/dist/antd.css';
import Main from './features/layouts/Main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './features/reducers/reducer';

const store = createStore(combineReducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('root')
);
