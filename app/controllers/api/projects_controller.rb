class Api::ProjectsController < ApplicationController

  def index
  end

  def create
    @project = Project.new(project_params)
    @project.author = current_user
  end

  def show
  end

  def update
  end

  def destroy
  end

  private
  def project_params
    params.require(:project).permit(:title, :body)
  end
end
