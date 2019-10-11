import React from 'react';
import { Row, Button } from 'antd';
import AddOrEditIncome from './AddOrEditIncome';
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
				<Button className="addButton" type="primary" onClick={this.showModal}>
					Add Income
				</Button>
				<AddOrEditIncome visible={visible} onCancel={this.onCancel} title={'Add income'} />
				<IncomesTable />
			</Row>
		);
	}
}

export default Incomes;
