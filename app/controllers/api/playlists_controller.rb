class Api::PlaylistsController < ApplicationController
  before_action :require_login

  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = select_playlist
  end

  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    
    if @playlist.save
      render "api/playlists/show"
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def update
    @playlist = current_user.playlists.select_playlist
    if @playlist && @playlist.update_attributes(playlist_params)
      render :show 
    elsif !@playlist
      render json: ['Could not locate playlist'], status: 400
    else
      render json: @playlist.errors.full_messages, status: 401
    end
  end

  def destroy
    @playlist = select_playlist
    if @playlist
      @playlist.destroy
      render :show
    else
      render ['Could not find playlist']
    end
  end

  private

  def select_playlist
    Playlist.find_by(params[:id])
  end

  def playlist_params
    params.require(:playlist).permit(:title)
  end

end
