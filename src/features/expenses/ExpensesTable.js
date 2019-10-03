import React from 'react';
import { connect } from 'react-redux';
import { Table, Card, Icon, Divider, Button, Tooltip } from 'antd';
import moment from 'moment';

class ExpensesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let {} = this.state;
		let { expenses } = this.props;

		const actions = (
			<div>
				<Tooltip title="Edit record">
					<Button type="link">
						<Icon type="edit" />
					</Button>
				</Tooltip>
				<Divider type="vertical" />
				<Tooltip title="Delete record">
					<Button type="link">
						<Icon type="delete" />
					</Button>
				</Tooltip>
			</div>
		);

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
				dataIndex: 'datetime',
				render: (datetime) => moment(datetime).format('LLLL')
			},
			{
				title: 'Warranty',
				dataIndex: 'warranty',
				render: (warranty) => warranty && warranty + ' months'

			},
			{
				title: 'Actions',
				render: () => actions
			}
		];

		console.log('col', columns);
		console.log('exs', expenses);
		return (
			<Card>
				<Table rowKey={(expenses) => expenses.id} columns={columns} dataSource={expenses} bordered stripped />
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
