class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end
  
  def create
    @kitty = Cat.new(cat_params)
    if @kitty.save
      redirect_to cat_url
    else
      render json: kitty.errors.full_messages, status: 422
    end
  end
    

  def show
    @cat = Cat.find(params[:id])
    if @cat
      render :show
    else
      render json: @cat.errors.full_messages, status: 422
    end
  end

  def new
    render :new
  end

  private
  def cat_params
    params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
  end
end
