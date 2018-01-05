json.extract! step, :title, :body

json.image_urls step.photos.each do |photo|
  json.image_url asset_path(photo.image.url(:original))
end
