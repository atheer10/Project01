Rails.application.routes.draw do
  # get 'users/index'
  # get 'users/create'
  # get 'users/show'
  # get 'users/edit'
  # get 'users/new'
  # get 'users/destroy'
  # get 'users/update'
  resources :users
  resources :projects
  devise_for :users
  # root "landing#home"
  root "projects#index"

  # get 'landing/home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
