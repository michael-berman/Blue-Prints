class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])

    if @user
      login(@user)
      render "api/users/show" # TODO: Render the homepage once it is up
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show" #TODO: render the homepage once it is up
    else
      render json: ["Nobody signed in"], status: 404 #TODO can't logout at all if not logged in
    end
  end
end
