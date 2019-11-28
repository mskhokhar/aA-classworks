class UsersController < ApplicationController
  
  def index
    if params[:query]
      users = User.where(username: params[:query])
    else
      users = User.all
    end
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: 422 
    end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end
  
  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end
  
  def update
    user = User.find(params[:id])
    if user.update(user_params)
      users_url(user)
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def likes
    likes = Like.where(liker_id: params[:user_id])
    render json: likes
  end

  def create_like
    like = Like.new(likes_params)
    if like.save
      render json: like
    else 
      render json: like.errors.full_messages, status: 422 
    end
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end

  def likes_params
    params.require(:like).permit(:likeable_id, :likeable_type).merge({liker_id: params[:id]})
  end
end