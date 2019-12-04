class PostsController < ApplicationController
  before_action :require_logged_in

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @post.sub_id = params[:sub_id]
    @post.save
    flash[:errors] = @post.errors.full_messages
    redirect_to sub_url(params[:sub_id])
  end

  def edit
    @post = Post.find_by(id: params[:id])
  end

  def update
    @post = current_user.posts.find_by(id: params[:id])
    
    if @post.update(post_params)
      redirect_to sub_url(@post.sub_id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end

  end

  def show
     @post = Post.find_by(id: params[:id])
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content, :subs)
  end
end
