import React from 'react';

class Songs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSongs();
  }

  render() {
   const { songs } = this.props;
    return (
      <div>
        <h2>{songs.title}</h2>
      </div>
    )
  }
}

export default Songs;