import React from 'react';
import { Card, Button } from 'antd';
import NewExpense from './NewExpense';

function Expenses() {
	return (
		<Card title="Expenses" style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}>
			<Button type="primary">
				Add Expense
			</Button>
			<NewExpense />
		</Card>
	);
}

export default Expenses;
