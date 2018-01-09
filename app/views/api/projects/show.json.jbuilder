json.partial! '/api/projects/project', project: @project

json.steps @steps.each do |step|
  json.title step.title
  json.body step.body
  json.photos step.photos.each do |photo|
    json.image_url asset_path(photo.image.url(:thumb))
  end
end

json.comments @comments.each do |comment|
  json.body comment.body
  json.author comment.author.username
end
