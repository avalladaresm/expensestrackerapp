import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Empty, Button } from 'antd';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import { colors } from '../../constants/global';
import { GetExpensesByCategory } from './actions';
import { bindActionCreators } from 'redux';
import Mayre from 'mayre';
class LastRecordsTimeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { expensesByCategory, GetExpensesByCategory } = this.props;
		let totals = expensesByCategory.map((expense) => expense.total);
		let total = totals.length !== 0 ? totals.reduce((acc, curr) => acc + curr) : '';

		return (
			<Card title="Expenses by category" className="pieChartCard">
				<Mayre
					of={
						<div>
							<Button type="primary" icon="reload" onClick={() => GetExpensesByCategory()}>
								Reload
							</Button>
							{<h3>Total expenses: Lps. {total}</h3>}
							{<h6>Values are represented in Lps (lempiras)</h6>}
							<PieChart width={840} height={400}>
								<Pie
									dataKey="total"
									nameKey="category"
									isAnimationActive={true}
									data={expensesByCategory}
									cx={420}
									cy={160}
									outerRadius={100}
									label
								>
									{expensesByCategory.map((entry, index) => (
										<Cell key={index} fill={colors[index]} />
									))}
								</Pie>
								<Tooltip />
								<Legend verticalAlign="top" iconType="circle" iconSize={10} />
							</PieChart>
						</div>
					}
					or={<Empty />}
					when={expensesByCategory.length > 0}
				/>
			</Card>
		);
	}
}

LastRecordsTimeline.propTypes = {
	expensesByCategory: PropTypes.array.isRequired,
	GetExpensesByCategory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		expensesByCategory: state.dashboardReducer.expensesByCategory
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ GetExpensesByCategory }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LastRecordsTimeline);
