json.partial! '/api/projects/project', project: @project

json.steps @steps.each do |step|
  json.title step.title
  json.body step.body
  json.photos step.photos.each do |photo|
      json.image_url asset_path(photo.image.url)
  end
end
