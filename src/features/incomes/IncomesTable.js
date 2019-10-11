import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table, Card, Icon, Divider, Button, Tooltip, message } from 'antd';
import moment from 'moment';
import AddOrEditIncome from './AddOrEditIncome';
import { DeleteIncome, GetIncomes } from './actions';
import { bindActionCreators } from 'redux';
class IncomesTable extends React.Component {
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

	deleteIncome = (id) => {
		let { DeleteIncome, GetIncomes } = this.props;
		this.setState({ loading: true });
		DeleteIncome(id).then(() => {
			this.setState({ loading: false });
			message.success('Record deleted successfully!');
		});
		GetIncomes().then(() => {
			this.setState({ loading: false });
		});
	};

	render() {
		let { incomes } = this.props;
		let { visible, recordToEdit, loading } = this.state;

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
								<Button type="link" onClick={() => this.deleteIncome(record.id)}>
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
				<Table
					loading={loading}
					rowKey={(incomes) => incomes.id}
					columns={columns}
					dataSource={incomes}
					bordered
					stripped
				/>
				<AddOrEditIncome
					visible={visible}
					onCancel={this.onCancel}
					record={recordToEdit}
					title={'Edit income'}
				/>
			</Card>
		);
	}
}

IncomesTable.propTypes = {
	DeleteIncome: PropTypes.func.isRequired,
	GetIncomes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		incomes: state.incomesReducer.incomes
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ DeleteIncome, GetIncomes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IncomesTable);
