import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Form, Input, Row, Col, Select, DatePicker, TimePicker, message } from 'antd';
import { AddExpense, EditExpense } from './actions';
import { bindActionCreators } from 'redux';
import { expenseCategories } from '../../constants/global';
import moment from 'moment';
const { TextArea } = Input;
const { Option } = Select;
class AddOrEditExpense extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};
	}

	onOk = (e) => {
		e.preventDefault();
		const { form, onCancel, AddExpense, EditExpense } = this.props;
		form.validateFields((err, values) => {
			this.setState({ loading: true });
			if (err) return;
			if (!values.id) {
				let data = {
					description: values.description,
					amount: values.amount,
					place: values.place,
					paymentType: values.paymentType,
					category: values.category,
					warranty: values.warranty ? values.warranty : null,
					dateTime: values.dateTime.toISOString(),
					createdAt: moment().toISOString()
				};
				AddExpense(data).then(() => {
					this.setState({ loading: false });
					message.success('Record added successfully!');
				});
				form.resetFields();
				onCancel();
			} else {
				let data = {
					id: values.id,
					description: values.description,
					amount: values.amount,
					place: values.place,
					paymentType: values.paymentType,
					category: values.category,
					warranty: values.warranty ? values.warranty : null,
					dateTime: values.dateTime.toISOString()
				};
				EditExpense(data).then(() => {
					this.setState({ loading: false });
					message.success('Record edited successfully!');
				});
				form.resetFields();
				onCancel();
			}
		});
	};

	render() {
		const { visible, onCancel, form, record, title } = this.props;
		const { getFieldDecorator } = form;
		const currencyRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
		const numberRegex = /^[0-9]+$/;

		return (
			<Modal visible={visible} title={title} okText="Save" onCancel={onCancel} onOk={this.onOk}>
				<Form layout="vertical">
					<Row gutter={16}>
						<Col span={6}>
							{getFieldDecorator('id', {
								initialValue: record ? record.id : null
							})(<Input hidden={true} />)}
							<Form.Item label="Amount">
								{getFieldDecorator('amount', {
									initialValue: record.amount ? record.amount : '',
									rules: [ { pattern: currencyRegex, message: 'Data has to be in currency format!' } ]
								})(<Input allowClear />)}
							</Form.Item>
						</Col>
						<Col span={18}>
							<Form.Item label="Place">
								{getFieldDecorator('place', {
									initialValue: record.place ? record.place : ''
								})(<Input allowClear />)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="Category">
								{getFieldDecorator('category', {
									initialValue: record.category ? record.category : ''
								})(
									<Select
										showSearch
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
									>
										{expenseCategories.map((category) => {
											return <Option key={category.name}>{category.name}</Option>;
										})}
									</Select>
								)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Payment type">
								{getFieldDecorator('paymentType', {
									initialValue: record.paymentType ? record.paymentType : ''
								})(<Input allowClear />)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={6}>
							<Form.Item label="Warranty">
								{getFieldDecorator('warranty', {
									initialValue: record.warranty ? record.warranty : '',
									rules: [
										{ pattern: numberRegex, message: 'Type the number of months under warranty!' }
									]
								})(<Input suffix="months" />)}
							</Form.Item>
						</Col>
						<Col span={18}>
							<Form.Item label="Description">
								{getFieldDecorator('description', {
									initialValue: record.description ? record.description : ''
								})(<TextArea rows={1} />)}
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item label="Date">
								{getFieldDecorator('dateTime', {
									initialValue: moment()
								})(<DatePicker />)}
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="Time">
								{getFieldDecorator('dateTime', {
									initialValue: moment()
								})(<TimePicker format={'HH:mm'} />)}
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Modal>
		);
	}
}

AddOrEditExpense.defaultProps = {
	record: {}
};

AddOrEditExpense.propTypes = {
	form: PropTypes.object.isRequired,
	AddExpense: PropTypes.func.isRequired,
	EditExpense: PropTypes.func.isRequired,
	record: PropTypes.object.isRequired,
	title: PropTypes.string
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ AddExpense, EditExpense }, dispatch);

export default connect(null, mapDispatchToProps)(Form.create()(AddOrEditExpense));
