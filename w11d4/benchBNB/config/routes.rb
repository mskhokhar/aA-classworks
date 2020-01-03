Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#show'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create, :show]
    resource :session, only: [:destroy, :create]
  end
end
