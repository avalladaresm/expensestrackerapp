import React from 'react';
import { connect } from 'react-redux';
import { Table, Card } from 'antd';

class ExpensesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let {} = this.state;
		let { expenses } = this.props;
		const columns = [
			{
				title: 'Amount',
				dataIndex: 'amount'
			},
			{
				title: 'Description',
				dataIndex: 'description'
			},
			{
				title: 'Place',
				dataIndex: 'place'
			},
			{
				title: 'Payment type',
				dataIndex: 'payment_type'
			},
			{
				title: 'Date and time',
				dataIndex: 'datetime'
			}
		];
		console.log('col', columns);
		console.log('exs', expenses);
		return (
			<Card>
				<Table rowKey={expenses => expenses.id} columns={columns} dataSource={expenses} bordered stripped />
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		expenses: state.expensesReducer.expenses
	};
};

export default connect(mapStateToProps, null)(ExpensesTable);
