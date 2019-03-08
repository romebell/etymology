import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const SongsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      return action.songs;
    case RECEIVE_SONG:
      newState[action.song.id] = action.song;
      return newState;
    case RECEIVE_PLAYLIST:
      if (action.playload.songs) return action.payload.songs;
      return {};
    default:
      return state;
      
  }
};

export default SongsReducer;