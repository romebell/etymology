Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]

    resources :playlists, only: [:create, :destroy, :update, :show, :index]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index, :show]

    resource :session, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
end
