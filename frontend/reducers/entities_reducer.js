import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import PlaylistsReducer from './playlists_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  playlists: PlaylistsReducer
});

export default entitiesReducer;