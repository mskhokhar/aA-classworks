class ArtworksController < ApplicationController
  
  def index
    my_artworks = Artwork.where(artist_id: params[:user_id])
    shared_artworks = User.find(params[:user_id]).shared_artworks
    render json: my_artworks + shared_artworks
  end

  def create
    artworks = Artwork.new(artwork_params)
    if artworks.save
      render json: artworks
    else
      render json: artworks.errors.full_messages, status: 422 
    end
  end

  def show
    artworks = Artwork.find(params[:id])
    render json: artworks
  end
  
  def destroy
    artworks = Artwork.find(params[:id])
    artworks.destroy
    render json: artworks
  end
  
  def update
    artworks = Artwork.find(params[:id])
    if artworks.update(artwork_params)
      artworkss_url(artworks)
    else
      render json: artworks.errors.full_messages, status: 422
    end
  end


  private

  def artwork_params
    params.require(:artwork).permit(:artist_id, :img_url, :title)
  end
end