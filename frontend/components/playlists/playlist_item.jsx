import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistItem = ({ playlist, deletePlaylist }) => {
  return (
    <ul>
      <li>{playlist.id}</li>
      <li>{playlist.title}</li>
      <li>{playlist.user_id}</li>
    </ul>
  )
}

export default PlaylistItem;