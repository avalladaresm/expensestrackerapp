import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Row, Col, Select, DatePicker } from 'antd';
const { TextArea } = Input;

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
					<Row gutter={16}>
						<Col span={6}>
							<Form.Item label="Amount">{getFieldDecorator('amount')(<Input allowClear />)}</Form.Item>
						</Col>
						<Col span={18}>
							<Form.Item label="Place">{getFieldDecorator('place')(<Input allowClear />)}</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="Category">
								{getFieldDecorator('category')(<Select />)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Payment type">
								{getFieldDecorator('paymentType')(<Input allowClear />)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item label="Description">{getFieldDecorator('description')(<TextArea />)}</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item label="Date">{getFieldDecorator('date')(<DatePicker />)}</Form.Item>
						</Col>
					</Row>
				</Form>
			</Modal>
		);
	}
}

NewExpense.propTypes = {
	form: PropTypes.object.isRequired
};

export default Form.create()(NewExpense);
