Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # get 'users', to: 'users#index'
  # get '/users/:id', to: 'users#show'
  # get '/users/new', to: 'users#new'
  # get '/users/:id/edit', to: 'users#edit'
  # post '/users', to: 'users#create'
  # patch '/users/:id', to: 'users#update'
  # put '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'


  resources :users, only: [:index, :create, :show, :destroy, :update ] do
    resources :comments, only: [:index]
    resources :artworks, only: [:index] do
      resources :comments, only: [:index]
    end

    member do
      get 'likes', to: 'users#likes'
    end

    member do
      post 'create_like', to: 'users#create_like'
    end
  end

  resources :artworks, only: [ :create, :show, :destroy, :update ] do
    resources :comments, only: [:index]
   
  end

  resources :artwork_shares, only:[:create,:delete]

  resources :comments, only: [:create, :destroy]
end
