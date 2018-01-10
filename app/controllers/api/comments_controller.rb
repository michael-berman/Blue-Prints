class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.project_id = params[:project_id]
    @comment.author = current_user
    @comment.save!
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end

end