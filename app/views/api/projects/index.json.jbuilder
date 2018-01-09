@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
    json.image_url asset_path(project.photos[0].image.url(:thumb))
  end
end
