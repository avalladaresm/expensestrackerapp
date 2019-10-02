import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Skeleton, Input, Button, List } from 'antd';
import { GetCategories } from './actions';
import { bindActionCreators } from 'redux';

//import AddCategory from './actions';

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
		GetCategories().then((data) => {
			debugger
			this.setState({ data, loading: false });
		});
	};

	UNSAFE_componentWillMount() {
		console.log('Component will mount!');
	}
	componentDidMount() {
		this.getCategoriesForSettings();
		console.log('Component did mount!');
	}
	showSkeleton = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false });
		}, 10000);
	};

	render() {
		let { data } = this.state;
		console.log('d', data);
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
						dataSource={data}
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ GetCategories }, dispatch);

/* const mapDispatchToProps = (dispatch) => {
	return {
		getCategories: () => dispatch(GetCategories())
	};
}; */

export default connect(null, mapDispatchToProps)(Settings);
