class Api::StepsController < ApplicationController

  def index
    # @steps = Project.find(params[:id]).steps
    @steps = Step.all

    render :index
  end

  def create
    @step = Step.new(step_params)
    @step.save!
  end

  private
  def step_params
    params.require(:step).permit(:title, :body, :project_id)
  end
end
