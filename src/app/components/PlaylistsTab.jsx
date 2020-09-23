import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
import { ConnectedPlaylist } from './Playlist';

export const PlaylistsTab = ({ playlists }) => {
  return (
    <>
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
    </>
  )
}

function mapStateToProps(state) {
  return {
    playlists: state.playlists
  }
}

export const ConnectedPlaylistsTab = connect(mapStateToProps)(PlaylistsTab);