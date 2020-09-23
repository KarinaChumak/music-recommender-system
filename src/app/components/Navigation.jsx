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

import { ConnectedPlaylistsTab } from './PlaylistsTab';

const { Header, Sider, Content } = Layout;

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
            Your music
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            Recommended to you
            </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Explore
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 10 }}>
          Playing now
        </Header>
        <ConnectedPlaylistsTab></ConnectedPlaylistsTab>

        {/* <Route
          exact
          path="/dashboard"
          render={() => (<ConnectedPlaylistsTab />)}>

        </Route> */}


      </Layout>
    </Layout>
  );
}

// function mapStateToProps(state) {
//   return {
//     playlists: state.playlists
//   }
// }

// export const ConnectedNavigation = connect(mapStateToProps)(Navigation);