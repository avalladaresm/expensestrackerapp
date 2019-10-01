import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { mainRoute } from '../../routes';
const { Header, Content, Footer } = Layout;

function Main() {
	return (
		<Router>
			<Layout className="mainLayout">
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<img className="logo" src={logo} alt="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]} style={{ lineHeight: '64px' }}>
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

export default Main;
