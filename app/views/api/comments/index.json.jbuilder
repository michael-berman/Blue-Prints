json.comments @comments.each do |comment|
  json.body comment.body
  json.author comment.author.username
  json.date comment.created_at
  json.profile_pic asset_path(comment.author.image.url(:avatar))
end
