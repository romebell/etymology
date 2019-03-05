class Api::AlbumsController < ApplicationController
  before_action :require_login

  def index
    @albums = Album.all
  end

  def show
    @album = select_album
  end

  private

  def select_album
    Album.find_by(params[:id])
  end
end
