import { createStore, applyMiddleware, combineReducers } from "redux";
import { defaultState } from '../../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock';
import * as mutations from './mutations';


export const store = createStore(
  combineReducers({
    users(users = defaultState.users, action) {
      switch (action.type) {
        case mutations.CREATE_USER:
          return [...users, {
            id: action.id,
            name: action.name,
            password: action.password
          }]

      }
      return users;
    },
    artists(artists = defaultState.artists) {
      return artists
    },
    songs(songs = defaultState.songs) {
      return songs
    },
    playlists(playlists = defaultState.playlists, action) {
      switch (action.type) {
        case mutations.ADD_SONG_TO_PLAYLIST:
          return updateObjectInArray(playlists, action);

      }
      return playlists
    }
  }
  ),
  applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}

function updateObjectInArray(array, action) {
  return array.map((item) => {
    if (item.id !== action.playlistId) {
      return item
    }
    const { songs, ...other } = item;
    const newItem = { ...other, songs: [...songs, action.songId] }
    return newItem;
  })
}