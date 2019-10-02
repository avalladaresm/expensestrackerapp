import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

class NewExpense extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onOk = (e) => {
		e.preventDefault();
		const { form, onCancel } = this.props;
		form.validateFields((err, values) => {
			if (err) return;
			console.log(values);
			form.resetFields();
			onCancel();
		});
	};

	render() {
		const { visible, onCancel, form } = this.props;
		const { getFieldDecorator } = form;
		return (
			<Modal visible={visible} title="Add expense" okText="Add" onCancel={onCancel} onOk={this.onOk}>
				<Form layout="vertical">
					<Form.Item label="Amount">{getFieldDecorator('amount')(<Input />)}</Form.Item>
				</Form>
			</Modal>
		);
	}
}

NewExpense.propTypes = {
	form: PropTypes.object.isRequired
};

export default Form.create()(NewExpense);
