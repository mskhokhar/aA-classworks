class SessionsController < ApplicationController
    
    def new
        @user = User.new
        render :new
    end
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
                login!(@user)
                render json: @user
                # redirect_to user_url(@user)
        else
            flash.now[:errors]= ["Wrong username or password"] #@user.errors.full_messages  
            render :new
        end
    end

    def destroy
        logout!
    end


end
