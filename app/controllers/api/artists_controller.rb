class Api::ArtistsController < ApplicationController
  before_action :require_login
  
  def index
    @artists = Artist.all
  end

  def show
    @artist = select_artist
  end

  private

  def select_artist
    Artist.find(params[:id])
  end
end
