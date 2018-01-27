class Api::ProjectsController < ApplicationController

  def index

    @projects = Project.all
    render :index
  end

  def create
    @project = Project.new(project_params)
    @project.author_id = current_user.id

    if @project.save
      @steps = @project.steps
      @photos = @project.photos
      render :show
    else
      render json: @project.errors.full_messages
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update_attributes(project_params)
      @steps = @project.steps
      @photos = @project.photos
      render :show
    else
      render json: @project.errors.full_messages
    end
  end

  def search

    @projects = Project.where("title ILIKE ?", "%#{params[:query]}%").all

    @query = params[:query]
  end

  def show
    @project = Project.find(params[:id])
    @steps = @project.steps
    @photos = @project.photos
    @comments = @project.comments
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
  end

  private
  def project_params
    params.require(:project).permit(:title, :body, :image,
      steps_attributes: [:title, :body, :project_id,
        photos_attributes: [:image, :step_id]])
  end
end
