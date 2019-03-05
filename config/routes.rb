Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] do 
      resources :playlists, only: [:index]
    end

    resources :playlists

    resource :session, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
end
