import React from 'react';
import { Card, Timeline } from 'antd';

class LastRecordsTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Card className='lastRecordsCard'>
				<Timeline mode="alternate">
					<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
					<Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
					<Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
					<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
				</Timeline>
			</Card>
		);
	}
}

export default LastRecordsTimeline;
