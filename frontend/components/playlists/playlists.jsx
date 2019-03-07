import React from 'react';
import PlaylistItem from './playlist_item';

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
              <h2>logo</h2>
              <h2>Etymology</h2>
            </div>
            <div className="playlist">
              <ul>
                {/* {
                  playlists.map(playlist => (
                    <h2>{playlist.title}</h2>
                    // <li>PLAYLIST</li>
                    )
                  )
                } */}
                {playlists}
              </ul>
            </div>
          </div>
          <div className="box box-2">Box 2</div>
          <div className="box box-3">Play Bar</div>
        </div>
      </div>
    )
  }
}

export default Playlists;
