import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Skeleton, Input, Button, List, message } from 'antd';
import { GetCategories, AddCategory } from './actions';
import { bindActionCreators } from 'redux';

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			categoryToAdd: undefined
		};
	}

	componentDidMount() {
		this.getCategoriesForSettings();
	}

	getCategoriesForSettings = () => {
		this.setState({ loading: true });
		let { GetCategories } = this.props;
		GetCategories().then(() => {
			this.setState({ loading: false });
		});
	};

	handleOnChange = (event) => {
		this.setState({ categoryToAdd: event.target.value });
	};

	handleOnClick = () => {
		let { categoryToAdd } = this.state;
		console.log('here1');
		console.log(categoryToAdd);
		categoryToAdd && categoryToAdd ? AddCategory(categoryToAdd) : message.error("Category can't be blank");
	};

	render() {
		let { categoryToAdd } = this.state;
		let { categories } = this.props;
		console.log(categoryToAdd);
		return (
			<Card title="Categories" style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}>
				<Skeleton loading={this.state.loading} active>
					<Input
						placeholder="Add a new category"
						style={{ display: 'inline-block' }}
						onChange={this.handleOnChange}
					/>
					<Button type="primary" style={{ display: 'inline-block' }} onClick={this.handleOnClick}>
						Primary
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
						size="small"
						bordered
						dataSource={categories}
						renderItem={(item) => <List.Item>{item}</List.Item>}
					/>
				</Skeleton>
			</Card>
		);
	}
}

Settings.propTypes = {
	GetCategories: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
	return {
		categories: state.settingsReducer.categories
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ GetCategories, AddCategory }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
