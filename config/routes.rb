Rails.application.routes.draw do
  
  resources :tasks
  resources :projects
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get '/me', to: "users#me"
  post '/signup', to: "users#signup"
  post '/login', to: "sessions#login"
  delete '/logout', to: "sessions#logout"
end
