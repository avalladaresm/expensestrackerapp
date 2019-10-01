import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Card, Timeline } from 'antd';
import logo from '../../assets/logo.png';
const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<img className="logo" src={logo} alt="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]} style={{ lineHeight: '64px' }}>
					<Menu.Item key="1">Dashboard</Menu.Item>
					<Menu.Item key="2">Income</Menu.Item>
					<Menu.Item key="3">Expenses</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px', marginTop: 100 }}>
				<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
					<Card
						title="Last Expenses"
						style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}
					>
						<Timeline>
							<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
							<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
							<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
							<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
						</Timeline>,
					</Card>
					<Card title="Last Incomes" style={{ width: 300, display: 'inline-block', margin: '0 20px 0 20px' }}>
						<Timeline>
							<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
							<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
							<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
							<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
						</Timeline>,
					</Card>
				</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Alejandro Valladares 2019</Footer>
		</Layout>
	);
}

export default App;
