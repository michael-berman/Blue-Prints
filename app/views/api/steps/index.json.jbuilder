json.steps @steps.each do |step|
  json.(step.id) json.extract! step, :title, :body
end
