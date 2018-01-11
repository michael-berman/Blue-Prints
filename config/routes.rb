Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    match "/projects/search", to: "projects#search", via: [:get]
    resources :projects, only: [:create, :show, :index, :destroy, :search] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:destroy]
    resources :steps, only: [:create, :index]
    resources :photos, only: [:create]
  end
end
