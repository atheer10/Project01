class UsersController < ApplicationController
  def index
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def edit
  end

  # only for user_id that is = to admin
  def create
  end

  def new
  end

  def destroy
  end

  def update
  end
end
