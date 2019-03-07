import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistItem = ({ playlist, deletePlaylist }) => {
  // console.log(playlist.photoURL);
  return (
    <ul>
      <li>{playlist.id}: {playlist.title} - {playlist.userId}</li>
      <img src={playlist.photoURL} alt=""/>
    </ul>
  )
}

export default PlaylistItem;