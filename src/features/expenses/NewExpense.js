import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Form, Input, Row, Col, Select, DatePicker, TimePicker } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
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
			/* console.log(values.datetime.toISOString()); */
			form.resetFields();
			onCancel();
		});
	};

	render() {
		const { visible, onCancel, form, categories } = this.props;
		const { getFieldDecorator } = form;
		const reg = /^[0-9]+(\.[0-9]{1,2})?$/;

		return (
			<Modal visible={visible} title="Add expense" okText="Add" onCancel={onCancel} onOk={this.onOk}>
				<Form layout="vertical">
					<Row gutter={16}>
						<Col span={6}>
							<Form.Item label="Amount">
								{getFieldDecorator('amount', {
									rules: [ { pattern: reg, message: 'Data has to be in currency format!' } ]
								})(<Input allowClear />)}
							</Form.Item>
						</Col>
						<Col span={18}>
							<Form.Item label="Place">{getFieldDecorator('place')(<Input allowClear />)}</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="Category">
								{getFieldDecorator('category')(
									<Select>
										{categories.map((category, index) => {
											return <Option key={index}>{category}</Option>;
										})}
									</Select>
								)}
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
						<Col span={12}>
							<Form.Item label="Date">{getFieldDecorator('datetime')(<DatePicker />)}</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Time">
								{getFieldDecorator('datetime')(<TimePicker format={'hh:mm'} />)}
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Modal>
		);
	}
}

NewExpense.propTypes = {
	form: PropTypes.object.isRequired,
	categories: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		categories: state.settingsReducer.categories
	};
};

export default connect(mapStateToProps, null)(Form.create()(NewExpense));
