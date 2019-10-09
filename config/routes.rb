Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:create, :show, :index, :update, :edit, :destroy, :featured] do
      resources :reviews, only: [:create, :index]
      resources :reservations, only: [:create]
    end
    resources :reservations, only: [:update, :edit, :destroy]
    resources :reviews, only: [:update, :edit, :destroy]
    get 'featured-restaurants', :to => 'restaurants#feature'
  end

  root "static_pages#root"
end
