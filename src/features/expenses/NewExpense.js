import React from 'react';
import { Modal, Form, Input } from 'antd';

class NewExpense extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { visible, onCancel } = this.props;

		return (
			<Modal visible={visible} title="Add expense" okText="Add" onCancel={onCancel}>
				<Form layout="vertical">
					<Form.Item label="Amount">
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		);
	}
}

export default NewExpense;
