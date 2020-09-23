// import React from "react";

// export const Dashboard = ({ artists }) => (
//   <div>
//     <h2>Dashboard</h2>
//   </div>
// )



import React, { useState } from 'react';
import { connect } from 'react-redux';

import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../styles/index.css';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { ConnectedPlaylist } from './Playlist';

const { Header, Sider, Content } = Layout;

export const Dashboard = ({ playlists }) => {
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
            nav 1
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
            </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
          Playing now
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 500,
          }}>
          Your playlists
          {playlists.map(playlist => (
            <ConnectedPlaylist id={playlist.id} name={playlist.name} songs={playlist.songs}></ConnectedPlaylist>
          ))}
        </Content>
      </Layout>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);