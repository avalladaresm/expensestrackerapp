import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Timeline } from 'antd';
//import { Mayre } from 'mayre';
import moment from 'moment';

class LastRecordsTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
        let { lastRecords } = this.props;
        
		return (
			<Card title="Last records" className="lastRecordsCard">
				<Timeline mode="alternate">
					{lastRecords.map((last, index) => {
						return (
							<Timeline.Item key={index} color={last.type === 0 ? 'green' : 'red'}>
								{last.amount + ' ' + last.place + ' ' + moment(last.dateTime).format('LLLL')}
							</Timeline.Item>
						);
					})}
				</Timeline>
			</Card>
		);
	}
}

LastRecordsTimeline.propTypes = {
	lastRecords: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		lastRecords: state.dashboardReducer.lastRecords
	};
};

export default connect(mapStateToProps, null)(LastRecordsTimeline);
