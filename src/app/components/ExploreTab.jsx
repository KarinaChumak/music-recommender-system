import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Layout, Typography, List, Avatar, Card, Col, Row } from 'antd';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;
import {
  CaretRightOutlined,
  HeartOutlined,
  EllipsisOutlined
} from '@ant-design/icons';

import { ConnectedPlaylist } from './Playlist';

export const ExploreTab = ({ songs }) => {
  return (
    <>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 500,
        }}>

        <div className="site-card-wrapper">
          <Row gutter={16}>
            {songs.map(
              (song) => (
                <Col span={6} key={song.id}>
                  <Card

                    style={{ width: 300, margin: 15 }}
                    cover={
                      song.avatar ?
                        <img alt="example" src={song.avatar} />
                        :
                        <img
                          alt="example"
                          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />}
                    actions={[
                      <CaretRightOutlined key="play" />,
                      <HeartOutlined key="like" />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
                  >
                    <Card.Meta
                      title={song.name}
                      description={song.author}
                    />
                  </Card>

                </Col>
              )

            )}


          </Row>
        </div>,
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

export const ConnectedExploreTab = connect(mapStateToProps)(ExploreTab);