import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Form, Input, Row, Col, Select, DatePicker, TimePicker } from 'antd';
import { AddIncome } from './actions';
import { bindActionCreators } from 'redux';
const { TextArea } = Input;
const { Option } = Select;
class NewIncome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onOk = (e) => {
		e.preventDefault();
		const { form, onCancel, AddIncome } = this.props;
		form.validateFields((err, values) => {
			if (err) return;
			let data = {
				amount: values.amount,
				description: values.description,
				place: values.place,
				payment_type: values.payment_type,
				datetime: values.datetime.toISOString(),
				categoryId: values.categoryId
			};
			AddIncome(data).then(() => {});
			form.resetFields();
			onCancel();
		});
	};

	render() {
		const { visible, onCancel, form, categories } = this.props;
		const { getFieldDecorator } = form;
		const currencyRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
		return (
			<Modal visible={visible} title="Add income" okText="Add" onCancel={onCancel} onOk={this.onOk}>
				<Form layout="vertical">
					<Row gutter={16}>
						<Col span={6}>
							<Form.Item label="Amount">
								{getFieldDecorator('amount', {
									rules: [ { pattern: currencyRegex, message: 'Data has to be in currency format!' } ]
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
								{getFieldDecorator('categoryId')(
									<Select
										showSearch
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
									>
										{categories.map((category) => {
											return <Option key={category.id}>{category.name}</Option>;
										})}
									</Select>
								)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Payment type">
								{getFieldDecorator('payment_type')(<Input allowClear />)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item label="Description">
								{getFieldDecorator('description')(<TextArea rows={1} />)}
							</Form.Item>
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

NewIncome.propTypes = {
	form: PropTypes.object.isRequired,
	categories: PropTypes.array.isRequired,
	AddIncome: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		categories: state.settingsReducer.categories,
		expenses: state.expensesReducer.expenses
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ AddIncome }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(NewIncome));
