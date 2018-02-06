class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new
    @favorite.author = 
  end

  def destroy
    favorite = Favorite.find(params[:id])
    favorite.destroy
  end

end
