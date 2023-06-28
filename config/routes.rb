Rails.application.routes.draw do
  resources :restaurant_pizzas, only: [:index, :show, :create]
  resources :pizzas, only: [:index, :show]
  resources :restaurants, only: [:index, :show, :destroy]

  get '/sessions', to: "sessions#index"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/views', to: "sessions#views"

  get '/me', to: "users#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
