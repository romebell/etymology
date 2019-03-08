import React from 'react';

class Songs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSongs();
  }

  render() {
  //  const { songs } = this.props;
  let songs = this.props.songs.map(song => {
    return song.title
  })
  // songs = songs.forEach(song => {
  //    return <li>{song}</li>
  // });
  let welcomeBack = songs[0];
    return (
      <div>
        {/* <li>{songs}</li> */}
        <h2>{welcomeBack}</h2>
      </div>
    )
  }
}

export default Songs;