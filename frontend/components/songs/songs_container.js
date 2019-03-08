import Songs from './songs';
import { connect } from 'react-redux';
import { requestSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
  let songs = Object.values(state.entities.songs);

  return ({
    songs: songs
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    requestSongs: () => dispatch(requestSongs())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs);