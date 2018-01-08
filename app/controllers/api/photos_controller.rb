class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.save!
  end

  private
  def photo_params
    params.require(:photo).permit(:image, :step_id)
  end
end
