import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import NewExpense from './NewExpense';

class ExpensesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let {} = this.state;

		return <Table />;
	}
}

const mapStateToProps = (state) => {
	return {
		expenses: state.expensesReducer.expenses
	};
};

export default connect(mapStateToProps, null)(ExpensesTable);
