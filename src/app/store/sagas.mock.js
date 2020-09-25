import {
  take,
  put,
  select
} from 'redux-saga/effects';

import * as mutations from './mutations';
import { v4 as uuidv4 } from 'uuid';

export function* addSongToPlaylistSaga() {
  // USELESS? no need to use saga
  while (true) {
    const { songId, playlistId } = yield take(mutations.REQUEST_SONG_TO_PLAYLIST_ADDITION);
    yield put(mutations.addSongToPlaylist(songId, playlistId));

  }
}

export function* userCreationSaga() {
  // no need to update state if adding new user
  while (true) {
    const { username, password } = yield take(mutations.REQUEST_USER_CREATION);
    const userId = uuidv4();
    yield put(mutations.createUser(username, password, userId))
    console.log("User Creation in saga")
  }
}