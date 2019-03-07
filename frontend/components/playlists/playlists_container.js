import Playlists from './playlists';
import { connect } from 'react-redux'
import { requestPlaylists, deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = state => {
  let playlists = Object.values(state.entities.playlists);
  
  return ({
    playlists: playlists
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    requestPlaylists: () => dispatch(requestPlaylists()),
    deletePlaylist: id => dispatch(deletePlaylist(id))
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(Playlists);