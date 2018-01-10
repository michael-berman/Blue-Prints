json.extract! project, :id, :title
json.image_url asset_path(project.image.url(:thumb))

json.author project.author, :username, :id

if project.title.length > 25
  json.short_title project.title[0..25] + " ..."
else
  json.short_title project.title
end
