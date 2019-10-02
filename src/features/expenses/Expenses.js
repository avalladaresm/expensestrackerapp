import React from 'react';
import { Card, Button } from 'antd';
import NewExpense from './NewExpense';

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
			<Card title="Expenses" style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}>
				<Button type="primary" onClick={this.showModal}>
					Add Expense
				</Button>
				<NewExpense visible={visible} onCancel={this.onCancel} />
			</Card>
		);
	}
}

export default Expenses;
