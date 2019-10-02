import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Skeleton, Input, Button, List } from 'antd';
import { GetCategories } from './actions';
import { bindActionCreators } from 'redux';

class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: []
		};
	}
	getCategoriesForSettings = () => {
		this.setState({ loading: true });
		let { GetCategories } = this.props;
		GetCategories().then(() => {
			this.setState({ loading: false });
		});
	};

	componentDidMount() {
		this.getCategoriesForSettings();
	}

	render() {
		let { categories } = this.props;

		return (
			<Card title="Categories" style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}>
				<Skeleton loading={this.state.loading} active>
					<Input placeholder="Add a new category" style={{ display: 'inline-block' }} />
					<Button type="primary" style={{ display: 'inline-block' }}>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ GetCategories }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
