json.partial! '/api/projects/project', project: @project

json.steps @steps.each do |step|
  json.title step.title
  json.body step.body
  json.photos step.photos.each do |photo|
    json.image_url asset_path(photo.image.url(:thumb))
  end
end

if @comments
  json.comments @comments.each do |comment|
    json.body comment.body
    json.author comment.author.username
    json.date comment.created_at
    json.profile_pic asset_path(comment.author.image.url(:avatar))
  end
end

json.favoriteLength @favorites_length

json.favorite @favorite[0]
