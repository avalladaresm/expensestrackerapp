import React from 'react';
import connect from 'redux'
import { Card } from 'antd';
import AddCategory from './actions'

function Settings() {
	return (
		<Card title="Categories" style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}>
			
		</Card>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {

	};
}

export default connect(null, mapDispatchToProps)(Settings);
