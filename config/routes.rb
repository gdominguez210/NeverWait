Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :reservations, only: [:index, :show]
      resources :favorites, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:create, :show, :index, :update, :edit, :destroy, :featured] do
      resources :reviews, only: [:create, :index]
      resources :reservations, only: [:create]
    end
    resources :reservations, only: [:update, :edit, :destroy] do 
    end
    resources :reviews, only: [:update, :edit, :destroy]
    resources :favorites, only: [:create, :show, :destroy]
    get 'featured-restaurants', :to => 'restaurants#feature'
    get 'search', :to => 'search#search'
    get 'autocomplete', :to => 'search#autocomplete'
    get 'search/restaurants', :to => 'restaurants#search'
    post 'reservations/findtable', :to => 'reservations#findtable'

  end

  root "static_pages#root"
end
