import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Skeleton, Input, Button, List, message, Form, Row, Col } from 'antd';
import { GetCategories, AddCategory } from './actions';
import { bindActionCreators } from 'redux';

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			skeletonLoading: false,
			listLoading: false,
			categoryToAdd: ''
		};
	}

	componentDidMount() {
		this.getCategoriesForSettings();
	}

	getCategoriesForSettings = () => {
		this.setState({ skeletonLoading: true });
		let { GetCategories } = this.props;
		GetCategories().then(() => {
			this.setState({ skeletonLoading: false });
		});
	};

	handleOnChange = (event) => {
		this.setState({ categoryToAdd: event.target.value });
	};

	handleOnClick = () => {
		let { categoryToAdd } = this.state;
		let { AddCategory, form } = this.props;
		if (categoryToAdd) {
			this.setState({ listLoading: true });
			form.validateFields((err, values) => {
				if (err) return;
				let data = { name: values.category };
				AddCategory(data)
					.then(() => {
						this.setState({ listLoading: false });
						message.success(`Category ${categoryToAdd} added successfully`);
					})
					.catch(() => {
						message.error('An error ocurred.');
					});
				form.resetFields();
			});
		} else message.warning("Category can't be blank");
	};

	render() {
		let { categories, form } = this.props;
		const { getFieldDecorator } = form;

		return (
			<Card title="Categories" style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}>
				<Skeleton loading={this.state.skeletonLoading} active>
					<Form layout="vertical">
						<Row gutter={16}>
							<Col span={24}>
								<Form.Item>
									{getFieldDecorator('category')(
										<Input
											placeholder="Type a category name"
											onChange={this.handleOnChange}
											allowClear
										/>
									)}
								</Form.Item>
							</Col>
						</Row>
					</Form>
					<Button type="primary" style={{ display: 'inline-block' }} onClick={this.handleOnClick}>
						Add category
					</Button>
					<List
						style={{
							margin: '20px',
							border: '1px solid #e8e8e8',
							borderRadius: '4px',
							overflow: 'auto',
							padding: '8px 24px',
							height: '300px'
						}}
						loading={this.state.listLoading}
						size="small"
						bordered
						dataSource={categories}
						renderItem={(item) => <List.Item>{item.name}</List.Item>}
					/>
				</Skeleton>
			</Card>
		);
	}
}

Settings.propTypes = {
	GetCategories: PropTypes.func.isRequired,
	AddCategory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		categories: state.settingsReducer.categories
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ GetCategories, AddCategory }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Settings));
