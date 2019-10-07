import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Timeline, Empty } from 'antd';
import Mayre from 'mayre';
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
				<Mayre
					of={
						<Timeline mode="alternate">
							{lastRecords.map((last, index) => {
								return (
									// eslint-disable-next-line
									<Timeline.Item key={index} color={last.type == 0 ? 'green' : 'red'}>
										{last.amount + ' ' + last.place + ' ' + moment(last.dateTime).format('LLLL')}
									</Timeline.Item>
								);
							})}
						</Timeline>
					}
					or={<Empty />}
					when={lastRecords.length > 0}
				/>
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
