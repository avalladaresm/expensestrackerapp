import React from 'react';
import { Row, Button } from 'antd';
import NewExpense from './NewExpense';
import ExpensesTable from './ExpensesTable';

class Expenses extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	showModal = () => {
		this.setState({ visible: true });
	};

	onCancel = () => {
		this.setState({ visible: false });
	};

	render() {
		let { visible } = this.state;
		return (
			<Row>
				<Button className="addButton" type="primary" onClick={this.showModal}>
					Add Expense
				</Button>
				<NewExpense visible={visible} onCancel={this.onCancel} />
				<ExpensesTable />
			</Row>
		);
	}
}

export default Expenses;
