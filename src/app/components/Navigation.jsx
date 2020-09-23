import React, { useState } from 'react';
import { connect } from 'react-redux';

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../styles/index.css';
import { Layout, Menu } from 'antd';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { ConnectedPlaylistsTab } from './PlaylistsTab';
import { Content } from './Content';
import { Test } from './Test';
// import { history } from '../store/history';

const { Header, Sider } = Layout;

export const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="main-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}  >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}    >

          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/dashboard">Your music</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/test">Recommended to you </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/dashboard3">Explore </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
          Playing now
        </Header>

      </Layout>

      <Content></Content>
    </Layout>
    // </Router>
  );
}
