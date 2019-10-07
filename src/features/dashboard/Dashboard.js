import React from 'react';
import LastRecordsTimeline from './LastRecordsTimeline';
import PieChart from './PieChart';
class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<LastRecordsTimeline />
				<PieChart />
			</div>
		);
	}
}

export default Dashboard;
