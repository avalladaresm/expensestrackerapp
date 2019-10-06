import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Form, Input, Row, Col, Select, DatePicker, TimePicker } from 'antd';
import { AddExpense } from './actions';
import { bindActionCreators } from 'redux';
import { categories } from '../../constants/global';
import moment from 'moment';
const { TextArea } = Input;
const { Option } = Select;
class NewExpense extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onOk = (e) => {
		e.preventDefault();
		const { form, onCancel, AddExpense } = this.props;
		form.validateFields((err, values) => {
			if (err) return;
			console.log("vals", values)
			let data = {
				description: values.description,
				amount: values.amount,
				place: values.place,
				paymentType: values.paymentType,
				category: values.category,
				warranty: values.warranty,
				dateTime: values.dateTime.toISOString(),
				createdAt: moment().toISOString()
			};
			AddExpense(data).then(() => {});
			form.resetFields();
			onCancel();
		});
	};

	render() {
		const { visible, onCancel, form } = this.props;
		const { getFieldDecorator } = form;
		const currencyRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
		const numberRegex = /^[0-9]+$/;
		return (
			<Modal visible={visible} title="Add expense" okText="Add" onCancel={onCancel} onOk={this.onOk}>
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
								{getFieldDecorator('category')(
									<Select
										showSearch
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
									>
										{categories.map(category => {
											return <Option key={category.name}>{category.name}</Option>;
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
						<Col span={6}>
							<Form.Item label="Warranty">
								{getFieldDecorator('warranty', {
									rules: [
										{ pattern: numberRegex, message: 'Type the number of months under warranty!' }
									]
								})(<Input suffix="months" />)}
							</Form.Item>
						</Col>
						<Col span={18}>
							<Form.Item label="Description">
								{getFieldDecorator('description')(<TextArea rows={1} />)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="Date">{getFieldDecorator('dateTime')(<DatePicker />)}</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Time">
								{getFieldDecorator('dateTime')(<TimePicker format={'hh:mm'} />)}
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
	AddExpense: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		expenses: state.expensesReducer.expenses
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ AddExpense }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(NewExpense));
