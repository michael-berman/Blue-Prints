json.partial! '/api/projects/project', project: @project

json.steps @steps.each do |step|
  json.step step, :title, :body
  step.photos.each do |photo|
    json.set! step.id do
      json.image_url asset_path(photo.image.url)
    end
  end
end
