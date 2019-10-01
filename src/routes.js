import React from 'react';
import { Route, Switch } from 'react-router';

import Expenses from './features/expenses/Expenses';
import Incomes from './features/incomes/Incomes';
import Settings from './features/settings/Settings';

export const mainRoute = () => (
	<Switch>
		<Route exact path="/expenses" component={Expenses} />
		<Route exact path="/incomes" component={Incomes} />
		<Route exact path="/settings" component={Settings} />
	</Switch>
);
