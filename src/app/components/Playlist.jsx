import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List, Typography } from 'antd';

export const Playlist = ({ name, songs }) => {
  return (
    <>

      <List
        header={<div>{name}</div>}
        bordered
        dataSource={songs}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>*</Typography.Text> {item}
          </List.Item>
        )}
      />
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  let playlistId = ownProps.id;
  let songsIds = ownProps.songs;
  let expandedSongs = state.songs.filter(song => songsIds.includes(song.id));
  return {
    name: ownProps.name,
    songs: expandedSongs.map(song => song.name)
  };
}

export const ConnectedPlaylist = connect(mapStateToProps)(Playlist);