import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List, Typography } from 'antd';
import {
  CaretRightOutlined
} from '@ant-design/icons';

export const Playlist = ({ name, songs }) => {
  return (
    <>
      <List
        header={<div>{name}</div>}
        bordered
        dataSource={songs}
        style={{ 'marginTop': 30 }}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<CaretRightOutlined />}
              title={item}
            />
          </List.Item>
        )}
      />
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  let playlistId = ownProps.key;
  let songsIds = ownProps.songs;
  let expandedSongs = state.songs.filter(song => songsIds.includes(song.id));
  return {
    name: ownProps.name,
    songs: expandedSongs.map(song => song.name)
  };
}

export const ConnectedPlaylist = connect(mapStateToProps)(Playlist);