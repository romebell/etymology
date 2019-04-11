import React from 'react';
import PlaylistItem from './playlist_item';
import { Link } from 'react-router-dom';

class Playlists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPlaylists();
  }

  render() {
    // const { playlists } = this.props;
    const playlists = this.props.playlists.map(playlist => {
      return (<PlaylistItem 
        key={playlist.id}
        playlist={playlist}
        deletePlaylist={this.props.deletePlaylist} />
      );
    });
    return (
      <div className="webplayer">
        <div className="container">
          <div className="box box-1">
            <div className="logo" >
            <i className="fas fa-headphones fa-2x"></i>
              <h2> ETYMOLOGY</h2>
            </div>
            <div className="playlist">
              <ul>
               <a className="">Playlists</a>
              </ul>
            </div>
            <div>{}</div>
          </div>
          <div className="box box-2">
           <li>{playlists}</li>
          </div>
          <div className="box box-3">
          </div>
        </div>
      </div>
    )
  }
}

export default Playlists;
