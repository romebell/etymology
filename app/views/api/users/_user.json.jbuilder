json.user do
  json.extract! user, :id, :username, :email
end

json.playlists do 
  user.playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :title, :user_id
    end
  end
end