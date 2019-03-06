import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const PlaylistsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists;
    case RECEIVE_PLAYLIST:
      newState[action.playlist.id] = action.playlist;
      return newState
    case REMOVE_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    case RECEIVE_CURRENT_USER:
      if (action.payload.playlists) return action.payload.playlists;
      return {};
    default:
      return state;
  }
};

export default PlaylistsReducer;