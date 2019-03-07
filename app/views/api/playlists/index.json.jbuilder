json.array! @playlists do |playlist|
  json.partial! 'api/playlists/playlist', playlist: playlist
  json.photoURL url_for(playlist.generate_photo)
end