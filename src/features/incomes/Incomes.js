import React from 'react';
import { Row, Button } from 'antd';
import NewIncome from './NewIncome';
import IncomesTable from './IncomesTable';

class Incomes extends React.Component {
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
				<Button type="primary" onClick={this.showModal}>
					Add Income
				</Button>
				<NewIncome visible={visible} onCancel={this.onCancel} />
				<IncomesTable />
			</Row>
		);
	}
}

export default Incomes;
