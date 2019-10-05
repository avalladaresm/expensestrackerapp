import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Table, Card, Icon, Divider, Button, Tooltip } from 'antd';
import { bindActionCreators } from 'redux';
import { GetExpenseCategory } from './actions';
import moment from 'moment';

class ExpensesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}

	/* getExpenseCategory = () => {
		let { GetExpenseCategory, expenses } = this.props;
		let { data } = this.state;
		console.log('exp', expenses);

		for (let i = 0; i < expenses.length; i++) {
			expenses[i].id &&
				GetExpenseCategory(expenses[i].id).then((res) => {
					console.log('exx', res);

					expenses[i] = {
						...expenses[i],
						category: res
					};
				});
		}
	}; */

	
	render() {
		let { data } = this.state;
		let { expenses } = this.props;
/* 		this.getExpenseCategory(); */
		//this.props.GetExpenseCategory(1).then((res)=>{console.log("res", res)})
		//let data = this.getExpenseCategory();
		console.log('d', data);
		console.log('d', expenses.map((d) => d.category));
		console.log('ex', expenses);
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
				title: 'Category',
				dataIndex: 'name'
				//render: (category) => category && category
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

		return (
			<Card>
				<Table rowKey={(data) => data.id} columns={columns} dataSource={expenses} bordered />
			</Card>
		);
	}
}

ExpensesTable.propTypes = {
	GetExpenseCategory: PropTypes.func.isRequired,
	expenses: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		expenses: state.expensesReducer.expenses
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ GetExpenseCategory }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
