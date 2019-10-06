import React from 'react';
import { Route, Switch } from 'react-router';

import Expenses from './features/expenses/Expenses';
import Incomes from './features/incomes/Incomes';

export const mainRoute = () => (
	<Switch>
		<Route exact path="/expenses" component={Expenses} />
		<Route exact path="/incomes" component={Incomes} />
	</Switch>
);
