class Api::ProjectsController < ApplicationController

  def index
    @projects = Project.all

    render :index
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages
    end
  end

  def show
    @project = Project.find(params[:id])
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:title, :body)
  end
end
