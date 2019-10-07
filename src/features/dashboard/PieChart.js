import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Empty } from 'antd';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { colors } from '../../constants/global';
import Mayre from 'mayre';
class LastRecordsTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { expensesByCategory } = this.props;

		return (
			<Card title="Expenses by category" className="pieChartCard">
				<Mayre
					of={
						<PieChart width={300} height={250}>
							<Pie
								dataKey="total"
								nameKey="category"
								isAnimationActive={false}
								data={expensesByCategory}
								cx={125}
								cy={125}
								outerRadius={80}
								fill="#8884d8"
								label
							>
								{expensesByCategory.map((entry, index) => <Cell key={index} fill={colors[index]} />)}
							</Pie>
							<Tooltip />
							<Legend
								margin={{
									top: 100,
									right: 100,
									left: 100,
									bottom: 100
								}}
								align="right"
								layout="vertical"
								iconType="circle"
								iconSize={10}
							/>
						</PieChart>
					}
					or={<Empty />}
					when={expensesByCategory.length > 0}
				/>
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
