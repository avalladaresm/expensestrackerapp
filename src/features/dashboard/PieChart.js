import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Pie, yuan } from 'ant-design-pro/lib/Charts';
import moment from 'moment';

class LastRecordsTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { lastRecords } = this.props;

		const salesPieData = [
			{
				x: '家用电器',
				y: 4544
			},
			{
				x: '食用酒水',
				y: 3321
			},
			{
				x: '个护健康',
				y: 3113
			},
			{
				x: '服饰箱包',
				y: 2341
			},
			{
				x: '母婴产品',
				y: 1231
			},
			{
				x: '其他',
				y: 1231
			}
		];

		return (
			<Card title="Activity by category" className="pieChartCard">
				<Pie
					hasLegend
					title="销售额"
					subTitle="销售额"
					total={() => (
						<span
							dangerouslySetInnerHTML={{
								__html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))
							}}
						/>
					)}
					data={salesPieData}
					valueFormat={(val) => <span dangerouslySetInnerHTML={{ __html: yuan(val) }} />}
					height={294}
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
