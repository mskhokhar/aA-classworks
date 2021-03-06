class BandsController < ApplicationController
    def new
        render :new
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            redirect_to bands_url
        else
            flash.new[:errors] = @band.errors.full_messages
        end
    end

    def index
        @bands = Band.all
        render :index
    end

    # def edit
        
    # end

    # def update
        
    # end

    # def show
        
    # end

    # def destroy
        
    # end

    private
    def band_params
        params.require(:band).permit(:name)
    end
end
