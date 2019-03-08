import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PlaylistsReducer from './playlists_reducer';
import SongsReducer from './songs_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  playlists: PlaylistsReducer,
  songs: SongsReducer
});

export default entitiesReducer;