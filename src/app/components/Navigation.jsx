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
  HeartOutlined,
  UserOutlined,
  SoundOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import { ConnectedPlaylistsTab } from './PlaylistsTab';
import { ConnectedExploreTab } from './ExploreTab';
import { ConnectedRecommendedTab } from './RecommendedTab';
import { Test } from './Test';

const { Header, Sider, Content } = Layout;

export const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="main-layout" style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}  >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}    >

          <Menu.Item key="1" icon={<HeartOutlined />}>
            <Link to="/playlists">Your music</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<SoundOutlined />}>
            <Link to="/recommendations">Recommended to you </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SearchOutlined />}>
            <Link to="/explore">Explore </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/settings">Settings </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
          Playing now
        </Header>
        <Content>
          <Switch>
            <Route
              exact
              path="/playlists"
              children={<ConnectedPlaylistsTab />}>

            </Route>
            <Route
              exact
              path="/explore"
              children={<ConnectedExploreTab></ConnectedExploreTab>}>

            </Route>
            <Route
              exact
              path="/recommendations"
              children={<ConnectedRecommendedTab></ConnectedRecommendedTab>}>

            </Route>

          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
