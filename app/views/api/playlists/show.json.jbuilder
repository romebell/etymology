json.playlist do 
  json.partial! "api/playlists/playlist", playlist: @playlist
end

json.songs do 
  json.array! @playlist.songs do |song|
    json.partial! 'api/songs/song', song: song
    if song.track.attached?
      json.trackURL url_for(song.track)
    end
  end
end