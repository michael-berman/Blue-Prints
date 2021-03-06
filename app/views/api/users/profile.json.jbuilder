json.extract! @user, :id, :username, :created_at
json.image_url asset_path(@user.image.url(:avatar))

json.projects_amount @projects.length
json.comments_amount @user.comments.length

json.projects @projects.each do |project|
  json.partial! 'api/projects/project', project: project
end
