class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new
    @favorite.author = current_user
    @favorite.project_id = params[:project_id]
    @favorite.save!
  end

  def destroy
    favorite = Favorite.find(params[:id])
    favorite.destroy
  end

end
