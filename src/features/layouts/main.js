import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { mainRoute } from '../../routes';
import { bindActionCreators } from 'redux';
import { InitExpenses, InitIncomes } from './actions';
const { Header, Content, Footer } = Layout;

class Main extends React.Component {
	componentDidMount() {
		let { InitExpenses, InitIncomes } = this.props;

		InitExpenses().then(() => {});
		InitIncomes().then(() => {});
	}

	render() {
		return (
			<Router>
				<Layout className="mainLayout">
					<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
						<img className="logo" src={logo} alt="logo" />
						<Menu
							theme="dark"
							mode="horizontal"
							defaultSelectedKeys={[ '1' ]}
							style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="1">
								<Link to="/" />
								Dashboard
							</Menu.Item>
							<Menu.Item key="2">
								<Link to="/incomes" />Income
							</Menu.Item>
							<Menu.Item key="3">
								<Link to="/expenses" />Expenses
							</Menu.Item>
						</Menu>
					</Header>
					<Content style={{ padding: '0 50px', marginTop: 100 }}>
						{mainRoute()}
						{/* <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
						<LastExpenses />
						<LastIncomes />
					</div> */}
					</Content>
					<Footer style={{ textAlign: 'center' }}>Alejandro Valladares 2019</Footer>
				</Layout>
			</Router>
		);
	}
}

Main.propTypes = {
	InitExpenses: PropTypes.func.isRequired,
	InitIncomes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		expenses: state.expensesReducer.expenses,
		incomes: state.incomesReducer.incomes,
	};
};

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			InitExpenses,
			InitIncomes,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
