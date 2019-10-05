import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Table, Card, Icon, Divider, Button, Tooltip } from 'antd';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { GetIncomeCategory } from './actions';

class IncomesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: ''
		};
	}

	getIncomeCategory = (id) => {
		let { GetIncomeCategory } = this.props;
		GetIncomeCategory(id).then((res) => {
			this.setState({ category: res });
		});
	};

	render() {
		let { category } = this.state;
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
				dataIndex: 'amount'
			},
			{
				title: 'Place',
				dataIndex: 'place'
			},
			{
				title: 'Category',
				dataIndex: 'id',
				render: (id) => {
					this.getIncomeCategory(id);
					return category;
				}
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

		return (
			<Card>
				<Table rowKey={(incomes) => incomes.id} columns={columns} dataSource={incomes} />
			</Card>
		);
	}
}

IncomesTable.propTypes = {
	GetIncomeCategory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		incomes: state.incomesReducer.incomes
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ GetIncomeCategory }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IncomesTable);
