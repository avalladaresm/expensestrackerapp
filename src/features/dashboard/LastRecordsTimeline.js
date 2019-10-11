import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Timeline, Empty, Button } from 'antd';
import Mayre from 'mayre';
import moment from 'moment';
import { GetLastRecords } from './actions';
import { bindActionCreators } from 'redux';

class LastRecordsTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { lastRecords, GetLastRecords } = this.props;

		return (
			<Card title="Last records" className="lastRecordsCard">
				<Mayre
					of={
						<div>
							<Button type="primary" icon="reload" onClick={() => GetLastRecords()}>
								Reload
							</Button>
							<Timeline mode="alternate">
								{lastRecords.map((last, index) => {
									return (
										// eslint-disable-next-line
										<Timeline.Item key={index} color={last.type == 0 ? 'green' : 'red'}>
											{'L. ' +
												last.amount +
												' | ' +
												last.place +
												' | ' +
												moment(last.dateTime).format('LL')}
										</Timeline.Item>
									);
								})}
							</Timeline>
						</div>
					}
					or={<Empty />}
					when={lastRecords.length > 0}
				/>
			</Card>
		);
	}
}

LastRecordsTimeline.propTypes = {
	lastRecords: PropTypes.array.isRequired,
	GetLastRecords: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		lastRecords: state.dashboardReducer.lastRecords
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ GetLastRecords }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LastRecordsTimeline);
