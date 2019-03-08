import * as APIUtil from '../utils/playlist_api_utils';

export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';

const receiveAllPlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists: playlists
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist: playlist
});

const removePlaylist = playlist => ({
  type: REMOVE_PLAYLIST,
  playlist: playlist
});

export const requestPlaylists = () => dispatch => (
  APIUtil.fetchPlaylists().then(playlists => dispatch(receiveAllPlaylists(playlists)))
)

export const requestPlaylist = id => dispatch => (
  APIUtil.fetchPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)))
)

export const createPlaylist = playlist => dispatch => (
  APIUtil.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)))
)

export const updatePlaylist = playlist => dispatch => (
  APIUtil.updatePlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)))
)

export const deletePlaylist = id => dispatch => (
  APIUtil.destroyPlaylist(id).then(playlist => dispatch(removePlaylist(playlist)))
)

