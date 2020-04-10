Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, except: [:update]
  resource :session, only: [:create, :destroy, :new]
  resources :bands
end
/Users/mymac/Desktop/aA-classworks/W5D5/movie_buff/config/routes.rb