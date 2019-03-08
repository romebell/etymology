import * as SongAPIUtil from '../utils/song_api_utils';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveAllSongs = songs => ({
  type: RECEIVE_ALL_SONGS,
  songs: songs
});

const receiveSong = song => ({
  type: RECEIVE_SONG,
  song: song
});

export const requestSongs = () => dispatch => (
  SongAPIUtil.fetchSongs().then(songs => dispatch(receiveAllSongs(songs)))
)

export const requestSong = id => dispatch => (
  SongAPIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
)
