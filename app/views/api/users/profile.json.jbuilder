json.extract! @user, :id, :username, :created_at

@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
  end
end
