import React from 'react';

class Playlists extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPlaylists();
  }

  render() {
    const { playlists } = this.props;
    return (
      <div className="webplayer">
        <div className="container">
          <div className="box box-1">
            <ul>
              {
                playlists.map(playlist => (
                  <li>{playlist.title}</li>
                  )
                )
              }
            </ul>
          </div>
          <div className="box box-2">Box 2</div>
          <div className="box box-3">Play Bar</div>
        </div>
      </div>
    )
  }
}

export default Playlists;