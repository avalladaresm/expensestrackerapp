import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Form, Input, Row, Col, Select, DatePicker, TimePicker, message } from 'antd';
import { AddIncome, EditIncome } from './actions';
import { bindActionCreators } from 'redux';
import { incomeCategories } from '../../constants/global';
import moment from 'moment';
const { TextArea } = Input;
const { Option } = Select;
class AddOrEditIncome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		};
	}

	onOk = (e) => {
		e.preventDefault();
		const { form, onCancel, AddIncome, EditIncome } = this.props;
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
					dateTime: values.dateTime.toISOString(),
					createdAt: moment().toISOString()
				};
				AddIncome(data).then(() => {
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
					dateTime: values.dateTime.toISOString()
				};
				EditIncome(data).then(() => {
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
		return (
			<Modal visible={visible} title="Add income" okText="Save" onCancel={onCancel} onOk={this.onOk}>
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
										{incomeCategories.map((category) => {
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
						<Col span={24}>
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

AddOrEditIncome.defaultProps = {
	record: {}
};

AddOrEditIncome.propTypes = {
	form: PropTypes.object.isRequired,
	AddIncome: PropTypes.func.isRequired,
	EditIncome: PropTypes.func.isRequired,
	record: PropTypes.object.isRequired,
	title: PropTypes.string
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ AddIncome, EditIncome }, dispatch);

export default connect(null, mapDispatchToProps)(Form.create()(AddOrEditIncome));
