import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistItem = ({ playlist, deletePlaylist }) => {
  return (
    <ul>
      <li>{playlist.title} - {playlist.userId}</li>
      <img src={playlist.photoURL} alt=""/>
    </ul>
  )
}

export default PlaylistItem;