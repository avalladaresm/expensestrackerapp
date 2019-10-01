import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,  } from 'antd';
import logo from '../../assets/logo.png';
const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<img className="logo" src={logo} alt="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '2' ]} style={{ lineHeight: '64px' }}>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
			</Header>
			<Content style={{ padding: '0 50px', marginTop: 100 }}>
				
				<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
			</Content>
			<Footer style={{ textAlign: 'center' }}>Alejandro Valladares 2019</Footer>
		</Layout>
	);
}

export default App;
