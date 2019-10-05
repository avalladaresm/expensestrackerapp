import React from 'react';
import { connect } from 'react-redux';
import { Table, Card, Icon, Divider, Button, Tooltip } from 'antd';
import moment from 'moment';

class IncomesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let {} = this.state;
		let { incomes } = this.props;

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
				title: 'Actions',
				render: () => actions
			}
		];

		console.log('col', columns);
		console.log('exs', incomes);
		return (
			<Card>
				<Table rowKey={(incomes) => incomes.id} columns={columns} dataSource={incomes} bordered stripped />
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		incomes: state.incomesReducer.incomes
	};
};

export default connect(mapStateToProps, null)(IncomesTable);
