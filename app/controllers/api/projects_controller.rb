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
    @steps = @project.steps
    @photos = @project.photos

  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:title, :body,
      steps_attributes: [:title, :body, :project_id],
      photos_attributes: [:image, :step_id])
  end
end
