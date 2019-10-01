import React from 'react';
import { Card, Timeline } from 'antd';

function LastExpenses() {
	return (
		<Card title="Last Expenses" style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}>
			<Timeline>
				<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
				<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
				<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
				<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
			</Timeline>,
		</Card>
	);
}

export default LastExpenses;
