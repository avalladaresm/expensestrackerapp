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
				title: 'Description',
				dataIndex: 'description'
			},
			{
				title: 'Amount',
				dataIndex: 'amount',
				render: (amount) =>  amount && 'Lps. ' + amount
			},
			{
				title: 'Place',
				dataIndex: 'place'
			},
			{
				title: 'Payment type',
				dataIndex: 'paymentType'
			},
			{
				title: 'Category',
				dataIndex: 'category'
			},
			{
				title: 'Date and time',
				dataIndex: 'dateTime',
				render: (dateTime) => moment(dateTime).format('LLLL')
			},
			{
				title: 'Created at',
				dataIndex: 'createdAt',
				render: (createdAt) => moment(createdAt).format('LLLL')
			},
			{
				title: 'Actions',
				width: 150,
				render: () => actions
			}
		];

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
