import React from 'react';
import { Route, Switch } from 'react-router';

import Dashboard from './features/dashboard/Dashboard';
import Incomes from './features/incomes/Incomes';
import Expenses from './features/expenses/Expenses';

export const mainRoute = () => (
	<Switch>
		<Route exact path={[ '/', '/dashboard' ]} component={Dashboard} />
		<Route exact path="/incomes" component={Incomes} />
		<Route exact path="/expenses" component={Expenses} />
	</Switch>
);
