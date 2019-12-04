Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create]
  resources :subs, except: [:destroy] do
    resources :posts, only: [:edit, :create, :update]
  end
  resources :posts, except: [:index, :edit, :create, :update]
  resource :session, only: [:new, :create, :destroy]
end
