class Api::SongsController < ApplicationController
  before_action :require_login

  def index
    @songs = Song.all
  end

  def show
    @song = select_playlist
  end

  private

  def select_song
    Song.find(params[:id])
  end

  def song_params
    params.require(:song).permit(:title, :duration, :album_id)
  end
end
