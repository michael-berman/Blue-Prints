json.extract! project, :id, :title
json.image_url asset_path(project.image.url(:thumb))

json.author project.author, :username
