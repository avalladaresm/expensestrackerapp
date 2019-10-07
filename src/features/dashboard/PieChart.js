import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { PieChart, Pie, Tooltip } from 'recharts';
class LastRecordsTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { expensesByCategory } = this.props;

		return (
			<Card title="Expenses by category" className="pieChartCard">
				<PieChart width={800} height={400}>
					<Pie
						dataKey="total"
						isAnimationActive={false}
						data={expensesByCategory}
						cx={200}
						cy={200}
						outerRadius={80}
                        fill="#8884d8"
                        label
					/>
					<Tooltip />
				</PieChart>
			</Card>
		);
	}
}

LastRecordsTimeline.propTypes = {
	expensesByCategory: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		expensesByCategory: state.dashboardReducer.expensesByCategory
	};
};

export default connect(mapStateToProps, null)(LastRecordsTimeline);
