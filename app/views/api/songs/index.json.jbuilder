json.array! @songs do |song|
  json.partial! 'api/songs/song', song: song
  if song.track.attached?
    json.trackURL url_for(song.track)
  end
end