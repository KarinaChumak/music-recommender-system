import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Typography, List, Avatar, Button } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;
import { ConnectedPlaylist } from './Playlist';

export const RecommendedTab = ({ songs }) => {
  return (
    <>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 500,
        }}>

        <Title>All songs</Title>
        <List
          bordered
          dataSource={songs}
          style={{ 'marginTop': 30 }}
          renderItem={song => (
            <List.Item>
              <List.Item.Meta
                avatar={song.avatar ?
                  <Avatar src={song.avatar} />
                  :
                  <Avatar src="http://3.bp.blogspot.com/-7xM__hxy--I/T5QRMswV4gI/AAAAAAAAFMA/lEusxPimxv0/s200/mediaplaybackactivity1.png" />}
                title={song.name}
                description={song.author}

              />
              <Button type="primary" shape="circle" icon={<PlusOutlined />} />
            </List.Item>
          )}
        />
      </Content>
    </>
  )
}

function mapStateToProps(state) {
  const allSongs = state.songs;
  const allArtists = state.artists;
  var artistsObj = allArtists.reduce(
    (obj, item) => Object.assign(obj, { [item.id]: { ...item } }), {});
  const expandedSongsInfo = allSongs.map(({ artist, ...otherProps }) => ({ ...artistsObj[artist], ...otherProps }))
  return {
    songs: expandedSongsInfo
  }
}

export const ConnectedRecommendedTab = connect(mapStateToProps)(RecommendedTab);