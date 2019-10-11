import React from 'react';
import { connect } from 'react-redux';
import { Table, Card, Icon, Divider, Button, Tooltip } from 'antd';
import moment from 'moment';
import AddOrEditExpense from './AddOrEditExpense';
class ExpensesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			recordToEdit: {}
		};
	}

	showModal = (record) => {
		this.setState({ visible: true, recordToEdit: record });
	};

	onCancel = () => {
		this.setState({ visible: false });
	};

	render() {
		let { expenses } = this.props;
		let { visible, recordToEdit } = this.state;

		const columns = [
			{
				title: 'Description',
				dataIndex: 'description'
			},
			{
				title: 'Amount',
				dataIndex: 'amount',
				render: (amount) => amount && 'Lps. ' + amount
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
				title: 'Warranty',
				dataIndex: 'warranty',
				render: (warranty) => warranty && warranty + ' month(s)'
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
				render: (record) => {
					return (
						<div>
							<Tooltip title="Edit record">
								<Button type="link" onClick={() => this.showModal(record)}>
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
				}
			}
		];

		return (
			<Card>
				<Table rowKey={(expenses) => expenses.id} columns={columns} dataSource={expenses} bordered stripped />
				<AddOrEditExpense
					visible={visible}
					onCancel={this.onCancel}
					record={recordToEdit}
					title={'Edit expense'}
				/>
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
