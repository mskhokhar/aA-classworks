class CommentsController < ApplicationController
  def index
    if params[:user_id]
      my_comments = Comment.where(author_id: params[:user_id])
    elsif params[:artwork_id]
      my_comments = Comment.where(artwork_id: params[:artwork_id])
    end
    render json: my_comments
  end

  def create
    comments = Comment.new(comment_params)
    if comments.save
      render json: comments
    else 
      render json: comments.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end
  params {query: Manraj}

  private
  def comment_params
    params.require(:comment).permit(:body, :author_id, :artwork_id)
  end
end