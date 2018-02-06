class Api::FavoritesController < ApplicationController

  def create
    @favorite = Favorite.new
    @favorite.author = current_user
    @favorite.project_id = params[:project_id]
    @favorite.save!
    @favorites_length = Favorite.where(project_id: @favorite.project_id).length
  end

  def destroy
    favorite = Favorite.find(params[:id])
    favorite.destroy
    @favorites_length = Favorite.where(project_id: favorite.project_id).length
  end

end
