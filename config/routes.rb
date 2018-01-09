Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :show, :index, :destroy] do
      resources :comments, only: [:create]
    end
    resources :steps, only: [:create, :index]
    resources :photos, only: [:create]
  end
end
