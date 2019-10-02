import React from 'react';
import { Modal } from 'antd';

class NewExpense extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
    }
    
	render() {
		const { visible, onCancel, onOk } = this.props;
		return (
			<Modal
				visible={visible}
				title="Add expense"
				okText="Add"
				onCancel={onCancel}
				onOk={onOk}
			>
			</Modal>
		);
	}
}

export default NewExpense;
