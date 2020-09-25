export const REQUEST_SONG_TO_PLAYLIST_ADDITION = 'REQUEST_SONG_TO_PLAYLIST_ADDITION';
export const ADD_SONG_TO_PLAYLIST = 'ADD_SONG_TO_PLAYLIST';

export const REQUEST_USER_CREATION = 'REQUEST_USER_CREATION';
export const CREATE_USER = 'CREATE_USER';

export const requestSongPlaylistAddition = (songId, playlistId) => ({
  // TODO: this should check current user and add his id
  type: REQUEST_SONG_TO_PLAYLIST_ADDITION,
  songId,
  playlistId

});

export const addSongToPlaylist = (songId, playlistId, userId) => ({
  type: ADD_SONG_TO_PLAYLIST,
  songId,
  playlistId,
  userId
})

export const requestUserCreation = (username, password) => ({
  // TODO: this should check current user and add his id
  type: REQUEST_USER_CREATION,
  username,
  password

});

export const createUser = (username, password, userId) => ({
  type: CREATE_USER,
  username,
  password,
  userId
})